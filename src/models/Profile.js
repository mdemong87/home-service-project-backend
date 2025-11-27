import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        authuserId: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        middleName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        lastName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        userName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        role: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },


        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            match: /^[0-9]{10,15}$/,
        },

        city: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        zipCode: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        address: {
            type: String,
            maxlength: 255,
        },

        addressTwo: {
            type: String,
            maxlength: 255,
        },

        avatar: {
            type: String,
        },

        maxCatagorySelect: {
            type: Number,
            min: 1,
            max: 50,
            required: true,
            default: 10,
        },

        maxAreaSelect: {
            type: Number,
            min: 1,
            max: 50,
            required: true,
            default: 10,
        },
        isUpdated: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
