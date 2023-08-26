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
exports.obtenermotorista = exports.obtenerallordenes = void 0;
const orden_schema_1 = require("../models/orden.schema");
const obtenerallordenes = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allordenes = yield orden_schema_1.ordenSchema.find();
            res.send(allordenes);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener las ordenes:', error);
            res.status(500).send('Ocurrió un error al obtener las ordenes.');
        }
    });
};
exports.obtenerallordenes = obtenerallordenes;
const obtenermotorista = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const moto = yield orden_schema_1.ordenSchema.find({ _id: req.params.id });
            res.send(moto[0]);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener las ordenes::', error);
            res.status(500).send('Ocurrió un error al obtener motorira');
        }
    });
};
exports.obtenermotorista = obtenermotorista;
