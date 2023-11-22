import mongoose from "mongoose";

//indica que se va a guardar en la bd
const newClientSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // trim: true,
    // unique: true
  },
  job: {
    type: String,
    // required: true,
    // trim: true,
    // unique: true
  },
  email: {
    type: String,
    // required: true,
    // trim: true,
    // unique: true
  },
  monthly_income: { type: Number },
  monthly_percentage: { type: Number },
  monthly_savings: { type: Number },
  code: { type: Number },
},
  { timestamps: true }
);

//esto es para interactuar con los metodos
export default mongoose.model('Client', newClientSchema)