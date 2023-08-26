import express from 'express';
import cors from 'cors';
import userRouter from './routers/usuarios.router';
import empresaRouter from './routers/empresas.router';
import productosRouter from './routers/productos.router';
import motoristasRouter from './routers/motoristas.routers';
import ordenesRouter from './routers/ordenes.routers'
import adminRouter from './routers/admins.router';

//Inicializacios
const app = express();
import './utilis/database'

//settings
app.set('port', process.env.PORT || 3000); //process.env.PORT puerte de la nube

//midleweares
app.use(express.json()); //para que el server reconozca jsons
app.use(express.urlencoded({extended: false}));//// Configura 


//rutas
app.use(cors());
app.use('/usuarios', userRouter);
app.use('/empresas', empresaRouter);
app.use('/productos', productosRouter);
app.use('/ordenes',ordenesRouter);
app.use('/administrador', adminRouter)


//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});