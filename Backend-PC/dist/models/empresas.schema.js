"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    categoria: String,
    nombre: String,
    imagen: String,
    fecha_contrato: String,
    descripcion_productos: String,
    pagos: String,
    terminos_y_condiciones: String,
    productos: (Array)
});
exports.EmpresaSchema = mongoose_1.default.model('empresas', schema); // enlace
