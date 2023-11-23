import { Router } from "express";
import { sendmessage } from "../controllers/twilio.controller.js";

const router = Router();

router.post('/send-sms', async (req, res) => {
  try {
    console.log("Conected!", req.body.code, req.body.phone)
    await sendmessage(req.body.code, req.body.phone);
  } catch (error) {
    if (error && error.statusCode) {
      res.status(error.statusCode).send({ message: error.message });
    } else {
      res.status(500).send({ message: error.message });
    }
  }
});

export default router;