import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
const connectToDatabase = async () => {
  const conn = await mongoose.connect(DB_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectToDatabase;
