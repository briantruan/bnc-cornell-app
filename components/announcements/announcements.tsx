import { TextComponents } from "@/components/misc/portableTextComponents";
import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";

export default function Announcements({
  announcements = [],
}: {
  announcements: SanityDocument[];
}) {
  return (
    <main>
      <div
        className="hero min-h-screen w-full"
        style={{ backgroundImage: "url(/background.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content container px-8 flex flex-col items-start">
          <div>
            <h1 className="text-4xl uppercase font-bold">Announcements</h1>
          </div>
          <div className="grid grid-cols-1 pb-20 lg:pb-0 gap-4">
            {announcements.map((announcement) => (
              <div className="card shadow-inner shadow-primary" key={announcement._id}>
                <div className="card-body">
                  <h2 className="card-title uppercase font-bold">
                    {announcement.title}
                  </h2>
                  <p className="pb-4">
                    Posted on {new Date(announcement.publishedAt).toDateString()}
                  </p>
                  <p>
                    {announcement?.body ? (
                      <PortableText
                        value={announcement.body}
                        components={TextComponents}
                      />
                    ) : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
