import { z } from "astro/zod";

const departureSchema = z.object({
  time: z.string(),
  dayOfWeek: z.array(z.enum(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"])),
  comment: z.string().nullable(),
});

const commentSchema = z.object({
  text: z.string(),
  times: z.array(z.string()),
});

export const routeSchema = z.object({
  number: z.string(),
  name: z.string(),
  isCircular: z.boolean(),
  departuresFromStart: z.array(departureSchema),
  departuresFromEnd: z.array(departureSchema),
  comments: z.array(commentSchema),
});
