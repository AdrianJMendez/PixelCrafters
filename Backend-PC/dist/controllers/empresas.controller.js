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
exports.ObtenerEmpresa = exports.ObtenerEmpresas = void 0;
const empresas_schema_1 = require("../models/empresas.schema");
const ObtenerEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresas_schema_1.EmpresaSchema.find({}, { categoria: 1, nombre: 1, imagen: 1, _id: 1 });
    if (empresa.length > 0) {
        res.send({ status: true, message: 'Empresas obtenidas con exito', empresa });
    }
    else {
        res.send({ status: false, message: 'Empresas no existen' });
    }
});
exports.ObtenerEmpresas = ObtenerEmpresas;
const ObtenerEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresas_schema_1.EmpresaSchema.findById(req.params.id, { nombre: true, imagen: true, productos: true });
    if (empresa) {
        res.send({ status: true, message: 'empresa obtenido con exito', empresa });
    }
    else
        res.send({ status: false, message: 'empresa no existe' });
    res.end();
});
exports.ObtenerEmpresa = ObtenerEmpresa;
