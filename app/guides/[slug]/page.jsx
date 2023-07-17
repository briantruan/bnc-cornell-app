// ./nextjs-app/app/[slug]/page.tsx

import Guide from "@/components/guides/guide";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { cachedClient } from "@/sanity/lib/client";

export const metadata = {
  title: "Guide Viewer"
}

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const guides = await cachedClient(postPathsQuery);

  return guides;
}

export const revalidate = 60

export default async function Page({ params }) {
  const guide = await cachedClient(postQuery, params);

  return <Guide guide={guide} />;
}