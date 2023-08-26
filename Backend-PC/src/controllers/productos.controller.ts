import {Request, Response} from 'express';
import { ProductoSchema } from '../models/productos.schema';




export const ObtenerProductos = async (req: Request, res: Response) => {
    const productos = await ProductoSchema.find({}, { unidades_disponibles:false, unidades_vendidas: false });
  
    if (productos.length > 0) {
      res.send({ status: true, message: 'productos obtenidas con exito', productos });
    } else {
      res.send({ status: false, message: 'productos no existen' });
    }
  };