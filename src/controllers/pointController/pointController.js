import Point from "../../models/Point.js";


/********** get all product controller is here **********/
const getAllPoints = async (req, res) => {

    try {


        // Count total documents for pagination metadata
        const AllPoints = await Point.find();


        // Return response
        res.status(200).json({
            success: true,
            message: "Credits fetched successfully!",
            data: AllPoints,
        });

    } catch (error) {
        console.error("Error fetching Credits:", error.message);
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetching products.",
        });
    }

};


/*********** modules export from here ************/
export {
    getAllPoints
};

