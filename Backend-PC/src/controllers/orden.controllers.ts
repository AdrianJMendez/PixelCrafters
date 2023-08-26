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
