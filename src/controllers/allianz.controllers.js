import Alliaz from '../models/allianz.model.js';

export const allianz = async (req, res) => {

  const { current_age, monthly_savings } = req.body;

  try {
    const newAlliaz = new Alliaz({
      current_age, monthly_savings
    });

    await newAlliaz.save();
    res.send("Registrando");

  } catch (error) {
    console.log("Error", error)
  }

};