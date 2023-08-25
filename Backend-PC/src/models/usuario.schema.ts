import mongoose from "mongoose";
import { Usuario } from "./usuario.model";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Usuario>({
  nombre: String,
  email: String,
  contraseña: String,
  metodo_de_pago: String,
  estado:Boolean,
  carrito_de_productos: Array<Producto>
});

export const UsuarioSchema = mongoose.model('usuarios',schema);// enlace