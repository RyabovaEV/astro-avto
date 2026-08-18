import organizationRow from './organization.json'
import { z } from "astro/zod";

const organizationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  workingHours: z.string(),
  directorName: z.string(),
  deputyName: z.string(),
})

export const organization = organizationSchema.parse(organizationRow)