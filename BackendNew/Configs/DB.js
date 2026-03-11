import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

const ConnectDb = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.Mongodb_URI);
    isConnected = db.connections[0].readyState;
    console.log("MONGODB-CONNECTED-SUCESSFULLY.......");
  } catch (error) {
    console.log("error in connection......", error);
  }
};

export default ConnectDb;
