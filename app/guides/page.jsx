import Guides from "@/components/guides/guides";
import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "Guides",
};

export const revalidate = 60

export default async function GuidesPage() {
  const response = await cachedClient(postsQuery);

  return <Guides guides={response} />;
}
