import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { routeSchema } from "./schemas/route.schema";

const news = defineCollection({
  loader: file("src/data/news.json"),
  schema: z.object({
    date: z.coerce.date(),
    news: z.string(),
    isMain: z.boolean(),
  }),
});

const phones = defineCollection({
  loader: file("src/data/phones.json"),
  schema: z.object({
    phone: z.string(),
    label: z.string(),
    signature: z.string(),
  }),
});

const documents = defineCollection({
  loader: file("src/data/docs.json"),
  schema: z.object({
    href: z.string().startsWith("/documents/"),
    title: z.string().min(1, { message: "Title cannot be empty" }),
  }),
});

const routesSuburbanCurrent = defineCollection({
  loader: file("src/data/routes/summer-suburban.json"),
  schema: routeSchema,
});

const routesSuburbanUpcoming = defineCollection({
  loader: file("src/data/routes/autumn-suburban.json"),
  schema: routeSchema,
});

const routesCityCurrent = defineCollection({
  loader: file("src/data/routes/summer-city.json"),
  schema: routeSchema,
});

const routesCityUpcoming = defineCollection({
  loader: file("src/data/routes/autumn-city.json"),
  schema: routeSchema,
});

export const collections = {
  news,
  phones,
  documents,
  routesSuburbanCurrent,
  routesSuburbanUpcoming,
  routesCityCurrent,
  routesCityUpcoming,
};
