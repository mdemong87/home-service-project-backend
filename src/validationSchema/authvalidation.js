import Joi from "joi";

// Register validation schema
export const registerSchema = Joi.object({
    fname: Joi.string().min(2).max(50).required().messages({
        "string.base": "Frist Name must be a text",
        "string.empty": "Frist Name is required",
        "string.min": "Frist Name must be at least 2 characters long",
        "any.required": "Frist Name is required",
    }),

    mname: Joi.string().min(2).max(50).messages({
        "string.base": "Middle Name must be a text",
        "string.empty": "Middle Name is required",
        "string.min": "Middle Name must be at least 2 characters long",
        "any.required": "Middle Name is required",
    }),

    lname: Joi.string().min(2).max(50).required().messages({
        "string.base": "Last Name must be a text",
        "string.empty": "Last Name is required",
        "string.min": "Last Name must be at least 2 characters long",
        "any.required": "Last Name is required",
    }),


    email: Joi.string().email().required().messages({
        "string.email": "Email must be valid",
        "any.required": "Email is required",
    }),

    password: Joi.string().min(6).max(50).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "string.empty": "Password is required",
        "any.required": "Password is required",
    }),
    role: Joi.string().valid("user", "provider", "admin").required().messages({
        "any.only": "Role must be either 'user' or 'provider' or 'admin'",
        "any.required": "Role is required",
    }),
});

// Login validation schema
export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email must be valid",
        "any.required": "Email is required",
    }),

    password: Joi.string().min(6).max(50).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "string.empty": "Password is required",
        "any.required": "Password is required",
    }),
});

// Forgot password validation schema
export const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email must be valid",
        "any.required": "Email is required",
    }),
});