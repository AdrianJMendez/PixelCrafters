"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresas_controller_1 = require("../controllers/empresas.controller");
const router = express_1.default.Router();
//obtener empresas
// http://localhost:3000/empresa
router.get('', empresas_controller_1.ObtenerEmpresas);
router.get('/:id', empresas_controller_1.ObtenerEmpresa);
exports.default = router;
