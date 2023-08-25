import mongoose from "mongoose";
import { Producto } from "./productos.model";


const schema = new mongoose.Schema<Producto>({
    precio: Number,
    unidades_disponibles: Number,
    unidades_vendidas: Number,
    nombre_producto: String,
    descripcion: String,
    imagen_producto: String,
});

export const ProductoSchema = mongoose.model('productos',schema);// enlace