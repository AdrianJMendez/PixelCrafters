import mongoose from 'mongoose';
import { Administrador } from './admins.model';

const schema = new mongoose.Schema<Administrador>({
    nombre: String,
    email: String,
    contraseña: String,
});

export const AdminSchema = mongoose.model('admins', schema)