"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.motoristaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    nombre: String,
    email: String,
    contraseña: String,
    estado: Boolean,
    Ordenes: (Array),
    Historialordenes: (Array),
});
exports.motoristaSchema = mongoose_1.default.model('motoristas', schema); // enlace
