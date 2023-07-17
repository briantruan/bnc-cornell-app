import Guides from "@/components/guides";
import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function GuidesPage() {
    const response = await cachedClient(postsQuery)

    return <Guides guides={response} />
}