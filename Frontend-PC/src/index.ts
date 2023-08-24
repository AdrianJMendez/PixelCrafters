import express from 'express';
import indexRoutes from './routes/rutasU';
import path from 'path';

//Inicializacion
const app = express();
import './database';

//settings
app.set('port', process.env.PORT || 8000); //process.env.PORT puerte de la nube



//midleweares
app.use(express.json()); //para que el server reconozca jsons
app.use(express.urlencoded({extended: false}));//// Configura 

// Configura la ruta para archivos estáticos en la carpeta "public"
app.use('/public', express.static(path.join(__dirname, '../../public')));


// Utiliza las rutas definidas en indexRoutes bajo /user
app.use( indexRoutes);


//rutas


//archivos estaticos

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});
