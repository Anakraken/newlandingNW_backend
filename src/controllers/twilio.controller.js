import dotenv from 'dotenv';
import path from 'path';
import { __dirname } from '../../env_path.js';
import Twilio from 'twilio';

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname + '/.env') });
}

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = Twilio(accountSid, authToken);

export async function sendmessage(code, phone) {
  try {
    // retornamos lo que nos ha devuelo twilio
    console.log('sendmensaje', phone, code);
    const message = await client.messages.create({
      to: `+52${phone}`,
      from: '+18329816231',
      body: `Este es tú codigo de autorización de NetWorth: ${code}`,
    });
    return message;
  } catch (error) {
    console.log('ERROR:', error);
  }
};