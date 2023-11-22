import Client from '../models/newClient.model.js';

export const register = async (req, res) => {

  const {
    name,
    email,
    job,
    monthly_income,
    monthly_savings,
    monthly_percentage,
  } = req.body;

  try {
    const newClient = new Client({
      name,
      email,
      job,
      monthly_income,
      monthly_savings,
      monthly_percentage
    });

    await newClient.save();
    res.send("Registrando");

  } catch (error) {
    console.log("Error", error)
  }

};


