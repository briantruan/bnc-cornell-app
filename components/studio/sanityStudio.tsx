"use client";

import { NextStudio } from "next-sanity/studio";

export default function SanityStudio({ config }: { config: any }) {
  return <NextStudio config={config} />;
}
