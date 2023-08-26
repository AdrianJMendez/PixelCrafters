import express from 'express';
import { ObtenerallMotoristas, guardarmotorista, login, registerM } from '../controllers/motoristas.controllers';


const router = express.Router();

//login
// http://localhost:3000/Motoristas/login
router.get('/',ObtenerallMotoristas);
router.post('/login',login );
router.post('registro',registerM);
router.post('/agregar',guardarmotorista);





export default router;