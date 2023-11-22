import Twilio from 'twilio';

const accountSid = 'ACa8bd124c6773805449fdbf381a0e2f1d';
const authToken = 'dcf39f0b38f73f4a948f1f1e27fab894';
const client = Twilio(accountSid, authToken);

export async function sendmessage(code, phone) {
  try {
    const message = await client.messages.create({
      to: `+52${phone}`,
      from: '+18329816231',
      body: `Este es tú codigo de autorización de NetWorth: ${code}`,
    });
    // retornamos lo que nos ha devuelo twilio
    console.log('sendmensaje', phone, code);
    return message;
  } catch (error) {
    console.log('ERROR:', error);
  }
};