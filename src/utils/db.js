import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
     process.env.MONGO
    );
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connectToDB;
