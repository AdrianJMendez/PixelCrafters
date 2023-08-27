import {Request, Response} from 'express';
import { EmpresaSchema } from '../models/empresas.schema';



export const ObtenerEmpresas = async (req: Request, res: Response) => {
  const empresas = await EmpresaSchema.find({}, {});

  if (empresas.length > 0) {
    res.send({ status: true, message: 'Empresas obtenidas con exito', empresas });
  } else {
    res.send({ status: false, message: 'Empresas no existen' });
  }
};

  export const ObtenerEmpresa = async (req: Request, res: Response) => {
    const empresa = await EmpresaSchema.findById(req.params.id, { nombre: true, imagen: true ,productos:true});
      if (empresa) {
        res.send({status: true, message: 'empresa obtenido con exito', empresa});
      }
      else 
        res.send({status: false, message: 'empresa no existe'});
      res.end();
  }


  export const agregarEmpresa= async (req: Request, res: Response) => {
    
    const nvaEmpresa = {
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      imagen: req.body.imagen,
      fecha_contrato: req.body.fecha_contrato,
      descripcion_productos: req.body.descripcion
    };
  
    try {
        const empresa = new EmpresaSchema(nvaEmpresa);
  
        await empresa.save();
  
        res.send({
          status: true,
          message: 'empresa agregado con exito',
          empresa
        });
  
    } catch (error) {
      res.status(500).send({
        status: false,
        message: 'Error al agregar el empresa',
        error
      });
    }
  };