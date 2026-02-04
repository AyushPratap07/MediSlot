import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is missing in .env");
  process.exit(1);
}

 
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
