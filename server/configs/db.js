import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    // ✅ Connect using the .env value directly, NO deprecated options
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
