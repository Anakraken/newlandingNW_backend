import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://anakrakennn:Ga0EZEk5kICz0r3B@landingnw.z3rsons.mongodb.net/');
    console.log(">>>>>>>>MongoDB is connected!")
  } catch (error) {
    console.log("ERROR:", error)
  }
};