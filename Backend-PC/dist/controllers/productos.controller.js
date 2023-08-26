"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerProducto = exports.ObtenerProductos = void 0;
const productos_schema_1 = require("../models/productos.schema");
const ObtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield productos_schema_1.ProductoSchema.find({}, { unidades_disponibles: false });
    if (productos.length > 0) {
        res.send({ status: true, message: 'productos obtenidas con exito', productos });
    }
    else {
        res.send({ status: false, message: 'productos no existen' });
    }
});
exports.ObtenerProductos = ObtenerProductos;
const ObtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = yield productos_schema_1.ProductoSchema.findById(req.params.id, { unidades_disponibles: false, unidades_vendidas: false });
    if (producto) {
        res.send({ status: true, message: 'producto obtenido con exito', producto });
    }
    else
        res.send({ status: false, message: 'producto no existe' });
    res.end();
});
exports.ObtenerProducto = ObtenerProducto;
