"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    precio: Number,
    unidades_disponibles: Number,
    unidades_vendidas: Number,
    nombre_producto: String,
    descripcion: String,
    imagen_producto: String,
});
exports.ProductoSchema = mongoose_1.default.model('productos', schema); // enlace
