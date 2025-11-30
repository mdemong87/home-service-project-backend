import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        size: { type: Number, required: true },
        type: { type: String, required: true },
        base64: { type: String, required: true },
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        experience: {
            type: String,
            default: "",
            trim: true,
        },

        promotiondis: {
            type: String,
            default: "",
            trim: true,
        },

        promotionalpriod: {
            type: String,
            default: "",
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        ranking: {
            type: Number,
            default: -1,
        },

        // Array of license files (base64 objects)
        license: {
            type: [String],
            default: [],
        },

        // Array of insurance files (base64 objects)
        insurance: {
            type: [String],
            default: [],
        },

        // Array of serviceImages (base64 objects)
        serviceImages: {
            type: [String],
            required: true,
            validate: {
                validator: (arr) => Array.isArray(arr) && arr.length > 0,
                message: "At least one service image is required",
            },
        },

        // Single selected category
        selectedCategories: {
            type: String,
            required: true,
            trim: true,
        },

        // Single selected area
        selectedAreas: {
            type: String,
            required: true,
            trim: true,
        },

        // Multiple subcategories
        selectedSubcategories: {
            type: [String],
            default: [],
        },

        // Multiple subareas
        selectedSubareas: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
