import { emailSchema, nameSchema, phoneSchema, descriptionSchema } from "../../../Utils/Validation/ValidationSchemas";

export const LanguageValidationSchema = {
    locale: nameSchema,
    name: nameSchema,
}