import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workshopsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/workshops" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      function: z.string(),
      bio: z.string(),
      pic: image(),
    }),
});

const foundationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/foundations" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

export const collections = {
  team: teamCollection,
  foundations: foundationsCollection,
  workshops: workshopsCollection,
};
