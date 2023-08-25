import mongoose from "mongoose";


export interface Producto {
    _id: mongoose.Types.ObjectId;
    precio: number;
    unidades_disponibles?: number;
    unidades_vendidas?: number;
    nombre_producto: string;
    descripcion?: string;
    imagen_producto: string;
}
