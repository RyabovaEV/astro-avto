import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { routeSchema } from "./schemas/route.schema";

const news = defineCollection({
    loader: file("src/data/news.json"),
    schema: z.object({
        date: z.coerce.date(),
        news: z.string(),
        isMain: z.boolean()
    })
})

const phones = defineCollection({
    loader: file("src/data/phones.json"),
    schema: z.object({
        phone: z.string(),
        label: z.string(),
        signature: z.string(),
    })
})

const routesSuburbanCurrent = defineCollection({
  loader: file('src/data/routes/summer-suburban.json'),
  schema: routeSchema,
})

const routesSuburbanUpcoming = defineCollection({
  loader: file('src/data/routes/autumn-suburban.json'),
  schema: routeSchema,
})

const routesCityCurrent = defineCollection({
  loader: file('src/data/routes/summer-city.json'),
  schema: routeSchema,  
})

const routesCityUpcoming = defineCollection({
  loader: file('src/data/routes/autumn-city.json'),
  schema: routeSchema,
})

export const collections = {news,phones, routesSuburbanCurrent, routesSuburbanUpcoming, routesCityCurrent, routesCityUpcoming};