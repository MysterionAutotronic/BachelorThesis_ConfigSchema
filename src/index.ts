import { z } from 'zod';

/* Address sub-schema  */
const AddressSchema = z.object({
    country: z
        .string()
        .regex(/^[a-z]{2}-[A-Z]{2}$/, { message: 'must look like “de-DE” or “en-US”' }),

    zipCode: z.string().regex(/^\d{4,10}$/, { message: 'digits, 4-10 chars' }),

    city: z.string().min(1),

    street: z.string().min(1),

    streetNumber: z.string().regex(/^\d+[a-zA-Z]?$/, {
        message: 'e.g. “12”, “12a”, “99B”',
    }),
});
export type Address = z.infer<typeof AddressSchema>;

/* Contact sub-schema */
const ContactSchema = z.object({
    areaCode: z.string().regex(/^\d{2,5}$/, {
        message: 'area code must be 2-5 digits (e.g. “212”, “030”, “089”)',
    }),

    phoneNumber: z.number().int(),

    email: z.string().email(),
});
export type Contact = z.infer<typeof ContactSchema>;

/*  Root config schema  */
export const ConfigSchema = z.object({
    address: AddressSchema,

    companyName: z.string().min(1),

    proposition: z.string().min(1),

    products: z.array(z.string()).nonempty({
        message: 'products must contain at least one item',
    }),

    about: z.string().min(1),
});
export type Config = z.infer<typeof ConfigSchema>;
