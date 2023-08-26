import mongoose from 'mongoose';
import { Producto } from './productos.model';
import { Orden } from './orden.model';



export interface Motorista {
    _id?: mongoose.Types.ObjectId;
    nombre: string;
    email: string;
    contraseña: string;
    estado:boolean;
    Ordenes: Array<Orden>;
    Historialordenes: Array<Object>;
  }

