import Area from "../../models/Area.js";
import Category from "../../models/Category.js";
import Contact from "../../models/Contact.js";
import Product from "../../models/Product.js";
import Review from "../../models/Review.js";
import User from "../../models/User.js";


/********************  User registration Controller here ***********************/
const deshboardcontroller = async (req, res) => {



    try {

        const user = await User.find();
        const catagory = await Category.find();
        const area = await Area.find();
        const review = await Review.find();
        const product = await Product.find();
        const contact = await Contact.find();




        const sendingData = {
            userCount: user.length,
            categoryCount: catagory.length,
            areaCount: area.length,
            reviewCount: review.length,
            productCount: product.length,
            contactCount: contact.length
        }



        res.status(201).json({
            success: true,
            message: "Deashboard fetched successfully",
            data: sendingData
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




export {
    deshboardcontroller
};

