"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    Productos: (Array),
    Estado: Boolean,
    idRemitente: mongoose_1.default.Types.ObjectId,
    idMotorista: mongoose_1.default.Types.ObjectId
});
exports.ordenSchema = mongoose_1.default.model('ordenes', schema); // enlace
