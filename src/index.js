//Imports
import app from './app.js';
import { connectDB } from './db.js';

//Settings
connectDB();
const port = 8000;

//Start Port
app.listen(port);
console.log(`server on port ${port}`);
