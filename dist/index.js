var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ConfigSchema: () => ConfigSchema
});
module.exports = __toCommonJS(index_exports);
var import_zod = require("zod");
var AddressSchema = import_zod.z.object({
  country: import_zod.z.string().regex(/^[a-z]{2}-[A-Z]{2}$/, { message: "must look like \u201Cde-DE\u201D or \u201Cen-US\u201D" }),
  zipCode: import_zod.z.string().regex(/^\d{4,10}$/, { message: "digits, 4-10 chars" }),
  city: import_zod.z.string().min(1),
  street: import_zod.z.string().min(1),
  streetNumber: import_zod.z.string().regex(/^\d+[a-zA-Z]?$/, {
    message: "e.g. \u201C12\u201D, \u201C12a\u201D, \u201C99B\u201D"
  })
});
var ContactSchema = import_zod.z.object({
  areaCode: import_zod.z.string().regex(/^\d{2,5}$/, {
    message: "area code must be 2-5 digits (e.g. \u201C212\u201D, \u201C030\u201D, \u201C089\u201D)"
  }),
  phoneNumber: import_zod.z.number().int(),
  email: import_zod.z.string().email()
});
var ConfigSchema = import_zod.z.object({
  address: AddressSchema,
  companyName: import_zod.z.string().min(1),
  proposition: import_zod.z.string().min(1),
  products: import_zod.z.array(import_zod.z.string()).nonempty({
    message: "products must contain at least one item"
  }),
  about: import_zod.z.string().min(1)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConfigSchema
});
