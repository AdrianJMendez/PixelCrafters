import mongoose from "mongoose";
import { Producto } from "./productos.model";
import { Orden } from "./orden.model";

const schema = new mongoose.Schema<Orden>({
    Productos:Array<Producto>,
    Estado:Boolean,
    idRemitente: mongoose.Types.ObjectId,
    idMotorista: mongoose.Types.ObjectId
  });
  
  export const ordenSchema = mongoose.model('ordenes',schema);// enlace