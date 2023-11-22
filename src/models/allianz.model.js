import mongoose from "mongoose";

//indica que se va a guardar en la bd
const allianzSchema = new mongoose.Schema({
  current_age: {
    type: Number,
    // required: true, 
  },
  current_age: {
    type: Number,
    // required: true, 
  },
},
  { timestamps: true }
);

//esto es para interactuar con los metodos
export default mongoose.model('Alliaz', allianzSchema)