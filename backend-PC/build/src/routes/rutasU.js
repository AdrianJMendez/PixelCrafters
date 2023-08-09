"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
//ruta de registro de los usuarios
router.get('/user/registro', (req, res) => {
    const filePath = path_1.default.join(__dirname, '../../../public', 'registerU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});
//ruta de registro de los administradores
router.get('/admin/registro', (req, res) => {
    const filePath = path_1.default.join(__dirname, '../../../public', 'admin.Login.html'); // Ajusta la ruta
    res.sendFile(filePath);
});
//ruta de registro de los motoristas
router.get('/driver/registro', (req, res) => {
    const filePath = path_1.default.join(__dirname, '../../../public', 'Login_M.html'); // Ajusta la ruta
    res.sendFile(filePath);
});
exports.default = router;
