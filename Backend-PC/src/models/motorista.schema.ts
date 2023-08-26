import mongoose from "mongoose";

import { Motorista } from "./motorista.model";
import { Orden } from "./orden.model";

const schema = new mongoose.Schema<Motorista>({
    _id: mongoose.Types.ObjectId,
    
    nombre: String,
    email: String,
    contraseña: String,
    estado: Boolean,
    Ordenes: Array<Orden>,
    Historialordenes: Array<Object>,
});

export const motoristaSchema = mongoose.model('motoristas',schema);// enlace