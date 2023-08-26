import express from 'express';
import { agregarOrden, obtenerallordenes, obtenerunaorden } from '../controllers/orden.controllers';



const router = express.Router();

//login
// http://localhost:3000/Motoristas/login
router.get('/',obtenerallordenes );

router.get('/:id',obtenerunaorden);

router.post('/add', agregarOrden)



export default router;