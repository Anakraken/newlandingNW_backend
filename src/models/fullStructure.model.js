import mongoose from "mongoose";

//indica que se va a guardar en la bd
const newClientSchema = mongoose.Schema({
  data_table: { type: Object },
  general_data: {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    job: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
      unique: true
    },
  },
  current_age: { type: Number },
  retirement_age: { type: Number },
  monthly_income: { type: Number },
  monthly_income_text: { type: String },
  monthly_income_text_round: { type: String },
  monthly_savings: { type: Number },
  future_monthly: { type: Number },
  future_monthly_text: { type: String },
  monthly_percentage: { type: Number },
  saved_amount: { type: Number },
  saved_amount_text: { type: String },
  final_surplus: { type: Number },
  final_surplus_text: { type: String },
  ppr: { type: Number },
  will_capital: { type: Number },
  will_capital_text: { type: String },
  will_save: { type: Number },
  will_need: { type: Number },
  will_save_text: { type: String },
  will_need_text: { type: String },
  code: { type: Number },

  rate_replacement: { type: Number },
  rate_future: { type: Number },
  rate_inflation: { type: Number },
  future_money: { type: Number },
});

//esto es para interactuar con los metodos
export default mongoose.model('Client', newClientSchema)