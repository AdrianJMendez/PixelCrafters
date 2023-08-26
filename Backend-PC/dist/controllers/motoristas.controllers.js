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
exports.registerM = exports.login = exports.guardarmotorista = exports.loginM = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const loginM = (req, res) => {
};
exports.loginM = loginM;
const guardarmotorista = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const Motorista = new motorista_schema_1.motoristaSchema({
            nombre: req.body.nombre,
            email: req.body.email,
            contraseña: req.body.contraseña,
            estado: req.body.estado,
            Ordenes: [{
                    Productos: [{
                            precio: req.body.precio,
                            unidades_disponibles: req.body.unidades_disponibles,
                            unidades_vendidas: req.body.unidades_vendidas,
                            nombre_producto: req.body.nombre_producto,
                            descripcion: req.body.descripcion,
                            imagen_producto: req.body.imagen_producto,
                        }],
                    Estado: req.body.Estado,
                    idRemitente: req.body.idRemitente,
                    idMotorista: req.body.idMotorista,
                }],
            Historialordenes: [{ Ordenes: req.body.Historialordenes }],
        });
        const motoristaAdd = [Motorista];
        motorista_schema_1.motoristaSchema.insertMany(motoristaAdd).then((respuesta) => {
            res.send(console.log('Motoristas agregados', respuesta));
            res.end();
        }).catch((error) => {
            res.send(console.error('error  ', error));
            res.end();
        });
    });
};
exports.guardarmotorista = guardarmotorista;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.motoristaSchema.findOne({ email: req.body.email, contraseña: req.body.contraseña }, { _id: true, nombre: true });
    if (motorista) {
        res.send({ status: true, message: 'Login correcto', motorista });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.login = login;
// register
const registerM = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nvomotorista = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña,
    };
    try {
        const motorista = new motorista_schema_1.motoristaSchema(nvomotorista);
        yield motorista.save();
        res.send({
            status: true,
            message: 'motorista agregado con exito',
            motorista
        });
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: 'Error al agregar el motorista',
            error
        });
    }
});
exports.registerM = registerM;
