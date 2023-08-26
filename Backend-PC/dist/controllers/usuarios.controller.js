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
exports.ObtenerUsuario = exports.AgregarProducto = exports.register = exports.login = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const productos_schema_1 = require("../models/productos.schema");
// login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_schema_1.UsuarioSchema.findOne({ email: req.body.email, contraseña: req.body.contraseña }, { _id: true, nombre: true });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.login = login;
// register
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nvoUsuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña,
    };
    try {
        const usuario = new usuario_schema_1.UsuarioSchema(nvoUsuario);
        yield usuario.save();
        res.send({
            status: true,
            message: 'Usuario agregado con exito',
            usuario
        });
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: 'Error al agregar el usuario',
            error
        });
    }
});
exports.register = register;
const AgregarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nvoProducto = new productos_schema_1.ProductoSchema(req.body);
    try {
        const usuario = yield usuario_schema_1.UsuarioSchema.findById(req.params.id);
        if (usuario) {
            const nvoProducto = new productos_schema_1.ProductoSchema(req.body);
            usuario.carrito_de_productos.push(nvoProducto);
            usuario.estado = false;
            yield usuario.save();
            res.send({
                status: true,
                message: 'producto agregado con exito',
                usuario
            });
        }
        else {
            res.send({
                status: false,
                message: 'usuario no encontrado',
            });
        }
    }
    catch (error) {
        console.error('Error al agregar el producto:', error);
        res.status(500).send({
            status: false,
            message: 'Error al agregar el producto',
            error
        });
    }
});
exports.AgregarProducto = AgregarProducto;
const ObtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_schema_1.UsuarioSchema.findById(req.params.id, { contraseña: false });
    if (usuario) {
        res.send({ status: true, message: 'usuario obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'usuario no existe' });
    res.end();
});
exports.ObtenerUsuario = ObtenerUsuario;
