import {Request, Response} from 'express';
import { UsuarioSchema } from '../models/usuario.schema';
import { ProductoSchema } from '../models/productos.schema';


// login
export const login = async (req: Request, res: Response) => {

  const usuario = await UsuarioSchema.findOne({email: req.body.email, contraseña: req.body.contraseña}, {_id: true, nombre: true});
  if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
  }
  else 
    res.send({status: false, message: 'Login incorrecto'});
  res.end();
};


// register

export const register = async (req: Request, res: Response) => {
  
  const nvoUsuario = {
    nombre: req.body.nombre,
    email: req.body.email,
    contraseña: req.body.contraseña,
  };

  try {
      const usuario = new UsuarioSchema(nvoUsuario);

      await usuario.save();

      res.send({
        status: true,
        message: 'Usuario agregado con exito',
        usuario
      });

  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Error al agregar el usuario',
      error
    });
  }
};

export const AgregarProducto = async (req: Request, res: Response) => {
 
  const nvoProducto = new ProductoSchema(req.body);

  try {
    const usuario = await UsuarioSchema.findById(req.params.id);
    if (usuario) {
      const nvoProducto = new ProductoSchema(req.body);
      usuario.carrito_de_productos.push(nvoProducto);
      usuario.estado = false;
      await usuario.save();
      res.send({
        status: true,
        message: 'producto agregado con exito',
        usuario
      });
    } else {
      res.send({
        status: false,
        message: 'usuario no encontrado',
      });
    }
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).send({
      status: false,
      message: 'Error al agregar el producto',
      error
    });
  }


};