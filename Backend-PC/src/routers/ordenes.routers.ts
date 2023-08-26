import express from 'express';
import { obtenerallordenes, obtenerunaorden } from '../controllers/orden.controllers';



const router = express.Router();

//login
// http://localhost:3000/Motoristas/login
router.get('/',obtenerallordenes );
router.get('/:id',obtenerunaorden);




export default router;