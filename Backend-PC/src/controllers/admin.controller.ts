import {Request, Response} from 'express';
import { AdminSchema } from '../models/admins.schema';


// login
export const login = async (req: Request, res: Response) => {

  const usuario = await AdminSchema.findOne({email: req.body.email, contraseña: req.body.contraseña}, {_id: true, nombre: true});
  if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
  }
  else 
    res.send({status: false, message: 'Login incorrecto'});
  res.end();
};
