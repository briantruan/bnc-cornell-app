import Link from "next/link"
import { UpdatedBadge } from "../badges/badges"
import { CategoryBadge } from "../badges/badgeHandler"

export default function Guides({ guides = [] }) {

    // Set date to check if add updated badge
    const date = new Date()
    date.setDate(date.getDate() + 7)

    return (
        <main>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: "url(/background.jpeg)" }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content px-8 flex flex-col items-start">
                    <div>
                        <h1 className="text-4xl uppercase font-bold">
                            Guides
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                        {guides.map((guide) => (
                            <div className="card sm:w-60 w-80 shadow-inner shadow-primary" key={guide._id}>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {guide.title}
                                        
                                        {/* Place CATEGORY badge */}
                                        <CategoryBadge category={guide.category} />

                                        {/* Place UPDATED badge if less than a week*/}
                                        {(date >= new Date(guide.publishedAt)) ? <UpdatedBadge options={`Last updated: ${new Date(guide.publishedAt).toDateString()}`} /> : null}
                                    </h2>
                                    <div className="card-actions justify-start">
                                    <Link href={`/guides/${guide.slug.current}`} className="btn btn-xs btn-outline btn-primary">Read Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )

}