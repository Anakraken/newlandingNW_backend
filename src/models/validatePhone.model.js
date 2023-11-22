import mongoose from "mongoose";

//indica que se va a guardar en la bd
const validatePhoneSchema = new mongoose.Schema({
  phone: {
    type: Number,
    // required: true,
    // trim: true,
    // unique: true
  },
},
  { timestamps: true }
);

//esto es para interactuar con los metodos
export default mongoose.model('Validated', validatePhoneSchema)