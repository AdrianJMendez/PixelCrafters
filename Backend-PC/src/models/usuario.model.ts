import mongoose from 'mongoose';
import { Producto } from './productos.model';

export interface Usuario {
    _id?: mongoose.Types.ObjectId;
    nombre: string;
    email: string;
    contraseña: string;
    metodo_de_pago?: string;
    estado?:boolean;
    carrito_de_productos: Array<Producto>;
  }

