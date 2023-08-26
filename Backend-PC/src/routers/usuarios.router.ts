import express from 'express';
import { AgregarProducto, ObtenerUsuario, login, register } from '../controllers/usuarios.controller';

const router = express.Router();

//login
// http://localhost:3000/users/login
router.post('/login', login);

//registro
// http://localhost:3000/users/register
router.post('/register', register);

//agregar productos al carrito
router.post("/:id", AgregarProducto);

router.get("/:id", ObtenerUsuario);

export default router;