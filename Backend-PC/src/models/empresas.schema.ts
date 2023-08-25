import mongoose from 'mongoose';
import { Producto } from './productos.model';
import { Empresa } from './empresas.model';

const schema = new mongoose.Schema<Empresa>({
    categoria: String,
    nombre: String,
    imagen: String,
    fecha_contrato: String,
    descripcion_productos: String,
    pagos: String,
    terminos_y_condiciones: String,
    productos: Array<Producto>
});

export const EmpresaSchema = mongoose.model('empresas',schema);// enlace