"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_router_1 = __importDefault(require("./routers/usuarios.router"));
const empresas_router_1 = __importDefault(require("./routers/empresas.router"));
const productos_router_1 = __importDefault(require("./routers/productos.router"));
const motoristas_routers_1 = __importDefault(require("./routers/motoristas.routers"));
const ordenes_routers_1 = __importDefault(require("./routers/ordenes.routers"));
const admins_router_1 = __importDefault(require("./routers/admins.router"));
//Inicializacios
const app = (0, express_1.default)();
require("./utilis/database");
//settings
app.set('port', process.env.PORT || 3000); //process.env.PORT puerte de la nube
//midleweares
app.use(express_1.default.json()); //para que el server reconozca jsons
app.use(express_1.default.urlencoded({ extended: false })); //// Configura 
//rutas
app.use((0, cors_1.default)());
app.use('/usuarios', usuarios_router_1.default);
app.use('/empresas', empresas_router_1.default);
app.use('/productos', productos_router_1.default);
app.use('/ordenes', ordenes_routers_1.default);
app.use('/administrador', admins_router_1.default);
app.use('/motoristas', motoristas_routers_1.default);
//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});
