"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "sanity";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import CopyButton from "../misc/copyButton";

const builder = imageUrlBuilder(client);

export default function Guide({ guide }) {

    { /* 
    For some reason, PortableText has components that don't auto render.
    Will declare them as a sep const to be used below.
    */ }

    const components = {
        block: {
            h1: ({children}) => <h1 className="text-4xl pt-4 uppercase font-bold">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl pt-4 uppercase font-bold">{children}</h2>,
            h3: ({children}) => <h3 className="text-xl pt-4 uppercase font-bold">{children}</h3>,
            h4: ({children}) => <h4 className="text-lg pt-4 uppercase font-bold">{children}</h4>,
        },
        list: {
          bullet: ({children}) => <ul className="list-disc pl-4">{children}</ul>,
          number: ({children}) => <ol className="list-decimal pl-4">{children}</ol>,
        },
        marks: {
            link: ({children, value}) => {
                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
                return (
                  <Link href={value.href} rel={rel} target="_blank" className="btn btn-xs btn-outline btn-primary">
                    {children}
                  </Link>
                )
            },
        },
      }

    return (
        <main>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: "url(/background.jpeg)" }} >
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content px-8 flex-col lg:flex-row lg:space-x-4">
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
                        <div>
                            <CopyButton />
                        </div>
                    </div>
                    <div>
                        <p>
                            {guide?.body ? <PortableText value={guide.body} components={components} /> : null}
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    )
}