import { Router } from "express";
import { register } from "../controllers/register.controllers.js";
import { validated } from "../controllers/validatedPhone.controllers.js";
import { allianz } from "../controllers/allianz.controllers.js";
import { tabla } from "../controllers/dataTable.controllers.js";
import Client from '../models/newClient.model.js';

const router = Router();
router.post('/register', register);

// router.get('/register/data', function (req, res) {
//   console.log("working", Client)
//   res.send({
//     'user_id': 'ghijsadhuijadhshjidas'
//   });
// });


router.post('/phone-validated', validated);
router.post('/proyeccion-allianz', allianz);
router.post('/data-table', tabla);



export default router;