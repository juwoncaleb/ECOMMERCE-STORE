import dbConnect from "../../../utils/Mongo";
import Office from "../../../model/Office";

export default async function Handler(req, res) {
    const { method } = req
    // Connect to Database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Database Connected");

    if (method === "GET") {
        res.status(200).json({ message: 'Hello from Next.js!' })
       
    }
    if (method === "POST") {
        try {
            const newOffice = await Office.create(req.body);
            res.status(200).json(newOffice);
            console.log("New office created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}