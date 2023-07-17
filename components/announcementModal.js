import { cachedClient } from "@/sanity/lib/client";
import { announcementQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function AnnouncementModal({ announcement }) {
  {
    /* 
    For some reason, PortableText has components that don't auto render.
    Will declare them as a sep const to be used below.
    */
  }

  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl pt-4 uppercase font-bold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl pt-4 uppercase font-bold">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl pt-4 uppercase font-bold">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg pt-4 uppercase font-bold">{children}</h4>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
      number: ({ children }) => (
        <ol className="list-decimal pl-4">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link
            href={value.href}
            rel={rel}
            target="_blank"
            className="btn btn-xs btn-outline btn-primary"
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <dialog id="announcement_modal" className="modal">
      <form method="dialog" className="modal-box">
        <h2 className="py-4 text-2xl uppercase font-bold">{announcement.title}</h2>
        <p>Posted {new Date(announcement.publishedAt).toDateString()}</p>
        <p>{announcement?.body ? <PortableText value={announcement.body} components={components} /> : null}</p>
        <div className="modal-action">
          <button className="btn btn-xs btn-primary btn-outline">Close</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
