"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import CopyButton from "../misc/copyButton";
import { CategoryBadge } from "../badges/badgeHandler";
import { TextComponents } from "../misc/portableTextComponents";
import type { SanityDocument } from "@sanity/client"

const builder = imageUrlBuilder(client);

export default function Guide({ guide }: { guide: SanityDocument }) {

    return (
        <main>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: "url(/background.jpeg)" }} >
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content px-8 pb-20 lg:pb-0 flex-col lg:flex-row lg:space-x-4">
                    <div className="flex flex-col items-center w-6/12">
                        <div>
                            {guide?.mainImage ? (
                            <Image
                                className="mask mask-squircle"
                                src={builder.image(guide.mainImage).width(300).height(300).url()}
                                width={300}
                                height={100}
                                alt={guide?.mainImage?.alt}
                            />
                            ) : null}
                        </div>
                        <div>
                            <h1 className="py-4 text-4xl uppercase font-bold text-center">
                                {guide.title}
                            </h1>
                        </div>
                        <div>
                            <p className="text-center pb-4">Updated {new Date(guide.publishedAt).toDateString()}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div>
                                <CategoryBadge category={guide.category} />
                            </div>
                            <div>
                                <CopyButton />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <p>
                            {guide?.body ? <PortableText value={guide.body} components={TextComponents} /> : null}
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    )
}