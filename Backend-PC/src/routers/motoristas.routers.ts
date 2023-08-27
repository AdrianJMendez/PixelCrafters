import express from 'express';
import { ObtenerallMotoristas, guardarmotorista, login, agregarunaorden, registerM, obtenerallordenesM } from '../controllers/motoristas.controllers';




const router = express.Router();

//login
// http://localhost:3000/Motoristas/login
router.get('/',ObtenerallMotoristas);
router.post('/login',login );
router.post('registro',registerM);
router.post('/agregar',guardarmotorista);
router.post('/agregarorden/:id',agregarunaorden);
router.get('/ordenes/:id',obtenerallordenesM);






export default router;