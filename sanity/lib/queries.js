import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, "category": category->title, publishedAt, slug
  } | order(category asc, title asc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, "category": category->title, publishedAt, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all announcements
export const announcementsQuery = groq`*[_type == "announcement"][]{
  title, publishedAt, body
} | order(publishedAt desc)`;
