import express from 'express';
import { ObtenerEmpresa, ObtenerEmpresas } from '../controllers/empresas.controller';

const router = express.Router();

//obtener empresas
// http://localhost:3000/empresa
router.get('',ObtenerEmpresas)

router.get('/:id', ObtenerEmpresa)




export default router;