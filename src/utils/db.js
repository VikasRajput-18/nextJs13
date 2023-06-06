import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vikasrajput:vikasrajput@cluster0.w9pwzz4.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connectToDB;
