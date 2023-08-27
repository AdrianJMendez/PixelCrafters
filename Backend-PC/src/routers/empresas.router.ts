import express from 'express';
import { ObtenerEmpresa, ObtenerEmpresas, agregarEmpresa } from '../controllers/empresas.controller';

const router = express.Router();

//obtener empresas
// http://localhost:3000/empresa
router.get('',ObtenerEmpresas)

router.get('/:id', ObtenerEmpresa)

router.post('/agregar', agregarEmpresa);


export default router;