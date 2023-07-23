import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";

// For some reason, PortableText has components that don't auto render.
// Will declare them as a sep const to be used below.

export const TextComponents: PortableTextComponents = {
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
    body: ({children}) => (
      <p className="whitespace-pre-line">{children}</p>
    )
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-4 whitespace-pre-line">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-4 whitespace-pre-line">{children}</ol>,
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
