import mongoose from 'mongoose';
import { Producto } from './productos.model';

export interface Empresa {
    _id: mongoose.Types.ObjectId;
    categoria: string;
    nombre: string;
    imagen: string;
    fecha_contrato: string;
    descripcion_productos: string;
    pagos: string;
    terminos_y_condiciones: string;
    productos: Array<Producto>;
}