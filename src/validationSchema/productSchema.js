import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),

    experience: Joi.string().allow("").optional(),

    promotiondis: Joi.string().allow("").optional(),

    promotionalpriod: Joi.string().allow("").optional(),

    email: Joi.string().email().required(),

    phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),

    description: Joi.string().allow("").required(),

    license: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                size: Joi.number().required(),
                type: Joi.string().required(),
                base64: Joi.string().required(),
            })
        )
        .min(0)
        .optional(),

    insurance: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                size: Joi.number().required(),
                type: Joi.string().required(),
                base64: Joi.string().required(),
            })
        )
        .min(0)
        .optional(),

    serviceImages: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                size: Joi.number().required(),
                type: Joi.string().required(),
                base64: Joi.string().required(),
            })
        )
        .min(1)
        .required(),

    selectedCategories: Joi.string().required(),

    selectedAreas: Joi.string().required(),

    selectedSubcategories: Joi.array()
        .items(Joi.string())
        .min(0)
        .optional(),

    selectedSubareas: Joi.array()
        .items(Joi.string())
        .min(0)
        .optional(),
});

export default productSchema;
