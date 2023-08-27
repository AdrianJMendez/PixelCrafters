import mongoose from "mongoose";
import { Producto } from "./productos.model";

export interface Orden{
    Productos:Array<Producto>;
    Estado:boolean;
    idRemitente: mongoose.Types.ObjectId;
    idMotorista: mongoose.Types.ObjectId;
    ubicacion: string;

}