import { cloudinary } from "../config/cloudinary.js";


const uploadFilesToCloudinary = async (files) => {
    try {
        if (!files || !files.length) return [];

        const uploads = files.map((file) => {
            return new Promise((resolve, reject) => {
                cloudinary.uploader.upload(
                    file.base64 || file,  // base64 string or real file path
                    {
                        folder: "voittinc-services",
                        resource_type: "auto", // handles pdf, image, etc.
                    },
                    (err, result) => {
                        if (err) {
                            console.error("Cloudinary Upload Error:", err);
                            reject(err);
                        } else {
                            resolve(result.secure_url);
                        }
                    }
                );
            });
        });

        return await Promise.all(uploads); // array of URLs

    } catch (error) {
        console.error("Upload Error:", error);
        return [];
    }
};


export default uploadFilesToCloudinary;