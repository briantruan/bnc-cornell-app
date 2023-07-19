import { isValidRequest } from "@sanity/webhook";
import { webhookSec } from "../env";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!isValidRequest(req, webhookSec)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  try {
    const {
      body: { type, slug },
    } = req;

    switch (type) {
      case "post":
        await res.revalidate(`/guides/${slug}`);
        return res.json({
          message: `Revalidated "${type}" with slug "${slug}"`,
        });
    }

    return res.json({ message: "No managed type" });
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" });
  }
}
