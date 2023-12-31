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
exports.obtenerallordenesM = exports.agregarunaorden = exports.ObtenerallMotoristas = exports.registerM = exports.login = exports.guardarmotorista = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
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
    const motorista = yield motorista_schema_1.motoristaSchema.findOne({ nombre: req.body.nombre, contraseña: req.body.contraseña }, { _id: true, nombre: true });
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
const ObtenerallMotoristas = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allmotoristas = yield motorista_schema_1.motoristaSchema.find();
            res.send(allmotoristas);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener los motoristas:', error);
            res.status(500).send('Ocurrió un error al obtener los Motoristas.');
        }
    });
};
exports.ObtenerallMotoristas = ObtenerallMotoristas;
const agregarunaorden = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const motoristaId = req.params.id;
            const nuevaOrden = req.body;
            const motorista = yield motorista_schema_1.motoristaSchema.findById(motoristaId);
            if (!motorista) {
                return res.status(404).send('Motorista no encontrado');
            }
            if (!motorista.Ordenes) {
                motorista.Ordenes = [];
            }
            motorista.Ordenes.push(nuevaOrden);
            yield motorista.save();
            res.json({ message: 'Orden agregada exitosamente' });
        }
        catch (error) {
            console.error('Error al agregar la orden', error);
            res.status(500).send('Ocurrió un error al agregar la orden');
        }
    });
};
exports.agregarunaorden = agregarunaorden;
const obtenerallordenesM = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const motos = yield motorista_schema_1.motoristaSchema.find({ _id: req.params.id });
            res.send(motos[0]);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener las motorista::', error);
            res.status(500).send('Ocurrió un error al obtener motorista');
        }
    });
};
exports.obtenerallordenesM = obtenerallordenesM;
