import dbConnect from "../../../utils/Mongo";
import Product from "../../../model/Product";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
       try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
       } catch (error) {
        console.log(error ,"fetchin erroe");
       }
    }
    if (method === "POST") {
        try {
            const newProduct = await Product.create(req.body);
            res.status(200).json(newProduct);
            console.log("New Product created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}