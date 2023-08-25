import mongoose from 'mongoose';

export interface Administrador {
    _id: mongoose.Types.ObjectId;
    nombre: string;
    email: string;
    contraseña: string;
}
