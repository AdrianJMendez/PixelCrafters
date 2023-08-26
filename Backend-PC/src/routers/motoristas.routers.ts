import express from 'express';
import { guardarmotorista, loginM, registerM } from '../controllers/motoristas.controllers';


const router = express.Router();

//login
// http://localhost:3000/Motoristas/login
router.post('/login',loginM );
router.post('registro',registerM);
router.post('/agregar',guardarmotorista);




export default router;