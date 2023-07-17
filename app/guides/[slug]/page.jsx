// ./nextjs-app/app/[slug]/page.tsx

import Guide from "@/components/guide";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { cachedClient } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const guides = await cachedClient(postPathsQuery);

  return guides;
}

export default async function Page({ params }) {
  const guide = await cachedClient(postQuery, params);

  return <Guide guide={guide} />;
}