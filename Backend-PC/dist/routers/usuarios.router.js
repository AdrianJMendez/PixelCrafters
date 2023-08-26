"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
//login
// http://localhost:3000/users/login
router.post('/login', usuarios_controller_1.login);
//registro
// http://localhost:3000/users/register
router.post('/register', usuarios_controller_1.register);
//agregar productos al carrito
router.post("/:id", usuarios_controller_1.AgregarProducto);
router.get("/:id", usuarios_controller_1.ObtenerUsuario);
exports.default = router;
