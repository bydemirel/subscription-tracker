import mongoose from "mongoose";

import{DB_URI,NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define MONGODB_URI env variable inside .env.<development/production>.local");
}

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`MongoDB connected to ${NODE_ENV} database`);
    }catch(error){
        console.error("MongoDB connection error: ",error);
    }
}

export default connectToDatabase;