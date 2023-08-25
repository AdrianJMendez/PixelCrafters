import express from 'express';
import { ObtenerProductos } from '../controllers/productos.controller';


const router = express.Router();

//obtener empresas
// http://localhost:3000/empresa
router.get('',ObtenerProductos)





export default router;