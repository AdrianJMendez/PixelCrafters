"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoristas_controllers_1 = require("../controllers/motoristas.controllers");
const router = express_1.default.Router();
//login
// http://localhost:3000/Motoristas/login
router.post('/login', motoristas_controllers_1.loginM);
router.post('/agregar', motoristas_controllers_1.guardarmotorista);
exports.default = router;
