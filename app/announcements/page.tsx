import Announcements from "@/components/announcements/announcements";
import { cachedClient } from "@/sanity/lib/client";
import { announcementsQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "Guides",
};

export const revalidate = 60

export default async function AnnouncementsPage() {
  const response = await cachedClient(announcementsQuery);

  return <Announcements announcements={response} />;
}