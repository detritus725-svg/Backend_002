import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})

const connectDB = async () => {
    try {
        const connectionInstance = await connect(`${process.env.MONGO_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB