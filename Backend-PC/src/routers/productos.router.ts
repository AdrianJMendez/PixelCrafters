import express from 'express';
import { ObtenerProducto, ObtenerProductos } from '../controllers/productos.controller';


const router = express.Router();

//obtener empresas
// http://localhost:3000/empresa
router.get('',ObtenerProductos)

router.get('/:id',ObtenerProducto);



export default router;