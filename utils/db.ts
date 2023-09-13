import mongoose from "mongoose";

const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected`);
  } catch (error: any) {
    console.log(`[DB_ERROR]: ${error}`);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
