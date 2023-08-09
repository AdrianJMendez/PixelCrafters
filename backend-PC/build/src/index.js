"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rutasU_1 = __importDefault(require("./routes/rutasU"));
const path_1 = __importDefault(require("path"));
//Inicializacion
const app = (0, express_1.default)();
require("./database");
//settings
app.set('port', process.env.PORT || 8000); //process.env.PORT puerte de la nube
//midleweares
app.use(express_1.default.json()); //para que el server reconozca jsons
app.use(express_1.default.urlencoded({ extended: false })); //// Configura 
// Configura la ruta para archivos estáticos en la carpeta "public"
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../../public')));
// Utiliza las rutas definidas en indexRoutes bajo /user
app.use(rutasU_1.default);
//rutas
//archivos estaticos
//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});
