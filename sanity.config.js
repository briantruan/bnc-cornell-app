"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

// Customisations
import Logo from "./components/studio/sanityLogo";
import StudioNavbar from "./components/studio/sanityNavbar";
import {theme} from 'https://themer.sanity.build/api/hues?default=fda4af;600;darkest:1d232a&primary=fda4af;darkest:1d232a&transparent=39555f;600&positive=44a744;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1315'

export default defineConfig({
  title: " ",
  basePath: "/studio",
  theme,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: Logo,
    }
  },
});
