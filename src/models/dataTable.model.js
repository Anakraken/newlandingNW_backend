import mongoose from "mongoose";

//indica que se va a guardar en la bd
const dataTableSchema = new mongoose.Schema({
  tableExclusiveData: {
    type: Array,
    // required: true,
  },
  porcentajeBono: {
    type: Number,
    // required: true,
  },
  bonoAcreditado: {
    type: Number,
    // required: true,
  },
  aportacionesAcumuladasaEdad: {
    type: Number,
    // required: true,
  },
  aportacionesAcumuladasaEdad: {
    type: Number,
    // required: true,
  },
  saldoProyectadoaEdad: {
    type: Number,
    // required: true,
  },
  simulationData: {
    type: Object,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
},
  { timestamps: true }
);

//esto es para interactuar con los metodos
export default mongoose.model('Table', dataTableSchema)