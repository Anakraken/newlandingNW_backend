import dotenv from 'dotenv';
import path from 'path';
import { __dirname } from '../env_path.js';
import mongoose from 'mongoose';

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname + '/.env') });
}

const url = process.env.MONGODB;

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(">>>>>>>>MongoDB is connected!")
  } catch (error) {
    console.log("ERROR:", error)
  }
};