"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_controller_1 = require("../controllers/productos.controller");
const router = express_1.default.Router();
//obtener empresas
// http://localhost:3000/empresa
router.get('', productos_controller_1.ObtenerProductos);
exports.default = router;
