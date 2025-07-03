import { z } from 'zod';

declare const AddressSchema: z.ZodObject<{
    country: z.ZodString;
    zipCode: z.ZodString;
    city: z.ZodString;
    street: z.ZodString;
    streetNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country?: string;
    zipCode?: string;
    city?: string;
    street?: string;
    streetNumber?: string;
}, {
    country?: string;
    zipCode?: string;
    city?: string;
    street?: string;
    streetNumber?: string;
}>;
type Address = z.infer<typeof AddressSchema>;
declare const ContactSchema: z.ZodObject<{
    areaCode: z.ZodString;
    phoneNumber: z.ZodNumber;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    areaCode?: string;
    phoneNumber?: number;
    email?: string;
}, {
    areaCode?: string;
    phoneNumber?: number;
    email?: string;
}>;
type Contact = z.infer<typeof ContactSchema>;
declare const ConfigSchema: z.ZodObject<{
    address: z.ZodObject<{
        country: z.ZodString;
        zipCode: z.ZodString;
        city: z.ZodString;
        street: z.ZodString;
        streetNumber: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country?: string;
        zipCode?: string;
        city?: string;
        street?: string;
        streetNumber?: string;
    }, {
        country?: string;
        zipCode?: string;
        city?: string;
        street?: string;
        streetNumber?: string;
    }>;
    companyName: z.ZodString;
    proposition: z.ZodString;
    products: z.ZodArray<z.ZodString, "atleastone">;
    about: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address?: {
        country?: string;
        zipCode?: string;
        city?: string;
        street?: string;
        streetNumber?: string;
    };
    companyName?: string;
    proposition?: string;
    products?: [string, ...string[]];
    about?: string;
}, {
    address?: {
        country?: string;
        zipCode?: string;
        city?: string;
        street?: string;
        streetNumber?: string;
    };
    companyName?: string;
    proposition?: string;
    products?: [string, ...string[]];
    about?: string;
}>;
type Config = z.infer<typeof ConfigSchema>;

export { type Address, type Config, ConfigSchema, type Contact };
