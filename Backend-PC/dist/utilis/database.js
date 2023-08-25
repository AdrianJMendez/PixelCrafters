"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Uri = "mongodb+srv://esusjadrian:bcuAxIzP4wunGQUx@pixelcrafters.fvpzuah.mongodb.net/PixelCrafters?retryWrites=true&w=majority";
mongoose_1.default.connect(Uri)
    .then(db => console.log('conectado a mongo'))
    .catch(err => console.log(err));
