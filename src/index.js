import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/mongo.db.js";

dotenv.config({
    path:"./.env"
});

const app = express();
app.use(cors());
app.use(express.json({
    limit:"50kb"
}));

//import routes 
import companyRoutes from "./routes/company.routes.js";


//use routes
app.use("/api/company",companyRoutes);




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




