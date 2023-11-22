import Validated from '../models/validatePhone.model.js';

export const validated = async (req, res) => {
  try {
    const valid = new Validated({ phone: req.body.phone });

    await valid.save();
    res.send("Telefono validado");

  } catch (error) {
    console.log("Error", error)
  }

};