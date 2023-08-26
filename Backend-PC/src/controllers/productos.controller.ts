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


export const ObtenerProducto = async (req: Request, res: Response) => {
  const producto = await ProductoSchema.findById(req.params.id, { unidades_disponibles:false, unidades_vendidas:false});
    if (producto) {
      res.send({status: true, message: 'producto obtenido con exito', producto});
    }
    else 
      res.send({status: false, message: 'producto no existe'});
    res.end();
}
