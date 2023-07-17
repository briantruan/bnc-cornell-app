"use client"
import useSWR, { SWRConfig } from "swr";

import AnnouncementModal from "./announcementModal";
import { AlertBadge } from "../badges/badges";
import { cachedClient } from "@/sanity/lib/client";
import { announcementQuery } from "@/sanity/lib/queries";

export async function getStaticProps() {
  const ann = await cachedClient(announcementQuery)
  return {
    props: {
      initialData: ann
    },
    revalidate: 600 // 10m 
  }
}

export default function AnnouncementSidebarItem({ initialData }) {

  const { data } = useSWR(announcementQuery, {initialData})

  return (
    <>
      {/* <AnnouncementModal announcement={data}/> */}
      <li onClick={()=>window.announcement_modal.showModal()}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
            <AlertBadge />
        </div>
      </li>
    </>
  )
}