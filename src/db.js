import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(">>>>>>>>MongoDB is connected!")
  } catch (error) {
    console.log("ERROR:", error)
  }
};