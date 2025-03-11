import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    main: defineCollection({
      type: "page",
      source: "main/*.md",
      schema: z.object({
        title: z.string(),
        picture: z.string().optional(),
        linkedin: z.string().url().optional(),
        resume: z.string().url().optional(),
      }),
    }),
    experience: defineCollection({
      type: "page",
      source: "experiences/*.md",
      schema: z.object({
        company: z.string(),
        position: z.string(),
        picture: z.string(),
        start: z.date(),
        end: z.date().optional(),
        link: z.string().url().optional(),
      }),
    }),
    project: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        name: z.string(),
        picture: z.string(),
        technologies: z.array(z.string()),
        start: z.date(),
        end: z.date().optional(),
        link: z.string().url().optional(),
      }),
    }),
  },
});
