import { Worker } from "bullmq";
import Product from "../models/Product.js";
import uploadFilesToCloudinary from "../utils/uploadFilesToCloudinary.js";


new Worker("product-create", async (job) => {

    const data = job.data.productData;


    const licenseFiles = data.license || [];
    const insuranceFiles = data.insurance || [];
    const serviceImageFiles = data.serviceImages || [];


    const licenseUrls = await uploadFilesToCloudinary(licenseFiles);
    const insuranceUrls = await uploadFilesToCloudinary(insuranceFiles);
    const serviceImageUrls = await uploadFilesToCloudinary(serviceImageFiles);



    data.license = licenseUrls;
    data.insurance = insuranceUrls;
    data.serviceImages = serviceImageUrls;



    // Replace Base64 with URLs before saving
    const finalData = {
        ...data,
    };

    // Save to MongoDB
    const product = await Product.create(finalData);
    return product;
},
    {
        concurrency: 3, // Process 3 products in parallel
        connection: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
        },
    }
);

