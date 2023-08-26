import { Request,Response } from "express"
import { ordenSchema } from "../models/orden.schema";
export const obtenerallordenes = async function (req: Request, res: Response) {
    try {
        const allordenes = await ordenSchema.find();
        res.send(allordenes);
        res.end();
    } catch (error) {
        console.error('Error al obtener las ordenes:', error);
        res.status(500).send('Ocurrió un error al obtener las ordenes.');
    }
};

export const obtenerunaorden= async function(req:Request,res:Response){
    try {
      const moto = await ordenSchema.find({_id:req.params.id});
      res.send(moto[0]);
      res.end();
  } catch (error) {
      console.error('Error al obtener las ordenes::', error);
      res.status(500).send('Ocurrió un error al obtener motorira');
  }

  
}

export const agregarOrden = async function(req:Request,res:Response){
    const nvoOrden = {
        Productos:req.body.productos,
        Estado:false,
        idRemitente: req.body._id,
      };
    
      try {
          const orden = new ordenSchema(nvoOrden);
    
          await orden.save();
    
          res.send({
            status: true,
            message: 'Orden agregada con exito',
            orden
          });
    
      } catch (error) {
        res.status(500).send({
          status: false,
          message: 'Error al agregar la orden',
          error
        });
      }

  
}
