import Guides from "@/components/guides/guides";
import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata = {
    title: "Guides"
}

export default async function GuidesPage() {
    const response = await cachedClient(postsQuery, {next: { revalidate: 60 }})

    return <Guides guides={response} />
}