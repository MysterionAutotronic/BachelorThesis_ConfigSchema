// src/index.ts
import { z } from "zod";
var AddressSchema = z.object({
  country: z.string().regex(/^[a-z]{2}-[A-Z]{2}$/, { message: "must look like \u201Cde-DE\u201D or \u201Cen-US\u201D" }),
  zipCode: z.string().regex(/^\d{4,10}$/, { message: "digits, 4-10 chars" }),
  city: z.string().min(1),
  street: z.string().min(1),
  streetNumber: z.string().regex(/^\d+[a-zA-Z]?$/, {
    message: "e.g. \u201C12\u201D, \u201C12a\u201D, \u201C99B\u201D"
  })
});
var ContactSchema = z.object({
  areaCode: z.string().regex(/^\d{2,5}$/, {
    message: "area code must be 2-5 digits (e.g. \u201C212\u201D, \u201C030\u201D, \u201C089\u201D)"
  }),
  phoneNumber: z.number().int(),
  email: z.string().email()
});
var ConfigSchema = z.object({
  address: AddressSchema,
  companyName: z.string().min(1),
  proposition: z.string().min(1),
  products: z.array(z.string()).nonempty({
    message: "products must contain at least one item"
  }),
  about: z.string().min(1)
});
export {
  ConfigSchema
};
