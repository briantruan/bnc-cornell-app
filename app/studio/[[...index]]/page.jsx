import SanityStudio from "@/components/studio/sanityStudio";
import config from "../../../sanity.config";

export const metadata = {
  title: "Studio Editor",
};

export default function StudioPage() {
  const configuration = config;

  return <SanityStudio config={configuration} />;
}
