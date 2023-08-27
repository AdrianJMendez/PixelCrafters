import { Request,Response } from "express"
import { motoristaSchema } from "../models/motorista.schema";


export const guardarmotorista = async function (req: Request, res: Response) {
    const Motorista=new motoristaSchema({
        
     
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña,
        estado: req.body.estado,
        Ordenes: [{
            Productos:[{
                precio:req.body.precio,
                unidades_disponibles: req.body.unidades_disponibles,
                unidades_vendidas: req.body.unidades_vendidas,
                nombre_producto: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                imagen_producto: req.body.imagen_producto,
            }],
            Estado:req.body.Estado,
            idRemitente:req.body.idRemitente,
            idMotorista:req.body.idMotorista,
        }],
        Historialordenes: [{Ordenes:req.body.Historialordenes }],
  
      
  
      });
      
       
    
      const motoristaAdd=[Motorista];
      motoristaSchema.insertMany(motoristaAdd).then((respuesta)=>{
  
              res.send(console.log('Motoristas agregados',respuesta));
              res.end();
  
      }).catch((error)=>{
          res.send(console.error('error  ',error));
          res.end();
      })
   
  
  
  };
  export const login = async (req: Request, res: Response) => {

    const motorista = await motoristaSchema.findOne({nombre: req.body.nombre, contraseña: req.body.contraseña},{_id:true,nombre:true});
    if (motorista) {
      res.send({status: true, message: 'Login correcto', motorista});
    }
    else 
      res.send({status: false, message: 'Login incorrecto'});
    res.end();
  };
  
  
  // register
  
  export const registerM = async (req: Request, res: Response) => {
    
    const nvomotorista = {
      nombre: req.body.nombre,
      email: req.body.email,
      contraseña: req.body.contraseña,
    };
  
    try {
        const motorista = new motoristaSchema(nvomotorista);
  
        await motorista.save();
  
        res.send({
          status: true,
          message: 'motorista agregado con exito',
          motorista
        });
  
    } catch (error) {
      res.status(500).send({
        status: false,
        message: 'Error al agregar el motorista',
        error
      });
    }
  };
  export const ObtenerallMotoristas = async function (req: Request, res: Response) {
    try {
        const allmotoristas = await motoristaSchema.find();
        res.send(allmotoristas);
        res.end();
    } catch (error) {
        console.error('Error al obtener los motoristas:', error);
        res.status(500).send('Ocurrió un error al obtener los Motoristas.');
    }
};
export  const agregarunaorden= async function(req:Request,res:Response){
  try {
    const motoristaId = req.params.id;
   const nuevaOrden=req.body;

    const motorista = await motoristaSchema.findById(motoristaId);
    if (!motorista) {
        return res.status(404).send('Motorista no encontrado');
    }
    if (!motorista.Ordenes) {
      motorista.Ordenes = [];
  }

         motorista.Ordenes.push(nuevaOrden);
    await motorista.save();

    res.json({ message: 'Orden agregada exitosamente' });
} catch (error) {
    console.error('Error al agregar la orden', error);
    res.status(500).send('Ocurrió un error al agregar la orden');
}

}


export const obtenerallordenesM= async function(req:Request,res:Response){
  try {
    const motos = await motoristaSchema.find({_id:req.params.id});
    res.send(motos[0]);
    res.end();
} catch (error) {
    console.error('Error al obtener las motorista::', error);
    res.status(500).send('Ocurrió un error al obtener motorista');
}


}
