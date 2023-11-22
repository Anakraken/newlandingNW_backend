import express from 'express';
import morgan from 'morgan';
import resgisterRoutes from './routes/register.routes.js';
import twilioRoute from './routes/twilio.routes.js';
import cors from 'cors';

//Settings
const app = express();

// //CORS
// app.use(cors);
app.use(
  cors({
    origin: '*',
  })
);

// //Middlewares
app.use(morgan('dev')); //muestra la peticion que llega como un console.log
app.use(express.json());

//Routes
app.use('/api', resgisterRoutes); //procesa la ruta del registro de un nuevo usuario
app.use(twilioRoute);

export default app;