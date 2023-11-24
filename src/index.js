import dotenv from 'dotenv';
import path from 'path';
import app from './app.js';
import { connectDB } from './db.js';
import { __dirname } from '../env_path.js';

dotenv.config({ path: path.resolve(__dirname + '/.env') });

//Settings
connectDB();
const port = process.env.PORT || 8000;

//Start Port
app.listen(port);
console.log(`server on port ${port}`);
