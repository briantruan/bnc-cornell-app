import Link from "next/link";
import { UpdatedBadge } from "../badges/badges";
import { CategoryBadge } from "../badges/badgeHandler";
import type { SanityDocument } from "@sanity/client"

export default function Guides({ guides = [] }: { guides: SanityDocument[] }) {
  // Set date to check if add updated badge
  const date = new Date();
  date.setDate(date.getDate() - 7);

  return (
    <main>
      <div
        className="hero min-h-screen w-full"
        style={{ backgroundImage: "url(/background.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content container px-8 flex flex-col items-start">
          <div>
            <h1 className="text-4xl uppercase font-bold">Guides</h1>
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 pb-20 lg:pb-0">
            {guides.map((guide) => (
              <div
                className="card w-80 h-40 shadow-inner shadow-primary"
                key={guide._id}
              >
                <div className="card-body justify-between">
                  <h2 className="card-title justify-between items-start">
                    {guide.title}

                    <div className="flex flex-row gap-2">

                      {/* Place UPDATED badge if less than a week*/}
                      {date <= new Date(guide.publishedAt) ? (
                        <UpdatedBadge options={"Updated"} />
                      ) : null}
                      
                      {/* Place CATEGORY badge */}
                      <CategoryBadge category={guide.category} />

                    </div>
                  </h2>
                  <div className="card-actions justify-start">
                    <Link
                      href={`/guides/${guide.slug.current}`}
                      className="btn btn-xs btn-outline btn-primary"
                    >
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
