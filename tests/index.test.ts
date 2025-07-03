import { describe, it, expect } from 'vitest';
import { ConfigSchema } from "../src";

const validConfig = {
    address: {
        country:     'de-DE',
        zipCode:     '85049',
        city:        'Ingolstadt',
        street:      'Esplanade',
        streetNumber:'10',
    },
    companyName:  'Test Inc.',
    proposition:  'We do nothing!',
    products:     ['nothing', 'still nothing'],
    about:        'we\'re not even a real business',
};

describe('ConfigSchema', () => {
    it('accepts a well-formed config object', () => {
        expect(() => ConfigSchema.parse(validConfig)).not.toThrow();
    });

    it('rejects an invalid zipCode', () => {
        const bad = { ...validConfig, address: { ...validConfig.address, zipCode: 'XYZ' } };
        const res = ConfigSchema.safeParse(bad);
        expect(res.success).toBe(false);
        if(!res.success){
            expect(res.error.issues[0].path).toEqual(['address', 'zipCode']);
        }
    });

    it('rejects an empty products array', () => {
        const bad = { ...validConfig, products: [] };

        const res = ConfigSchema.safeParse(bad);
        expect(res.success).toBe(false);

        if (!res.success) {
            expect(res.error.issues[0].path).toEqual(['products']);
        }
    });

    it('rejects when companyName is missing', () => {
        const { companyName, ...noName } = validConfig;
        expect(() => ConfigSchema.parse(noName as any)).toThrow();
    });
});