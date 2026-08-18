import insuranceRow from './insurance.json'
import { z } from "astro/zod";

const insuranceSchema = z.object({
  insurer: z.string().transform(s => s.trim()),
  number: z.string().transform(s => s.trim()),
  dateBegin: z.coerce.date(),
  dateEnd: z.coerce.date()
}).refine(data => data.dateEnd > data.dateBegin, { message: 'Дата окончания должна быть позже даты начала' });

export const insurance = insuranceSchema.parse(insuranceRow);