import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

//Inicializacion
const app = express();

//settings
app.set('port', process.env.PORT || 8000); //process.env.PORT puerte de la nube
app.set('views', path.join(__dirname, 'views'));
//configurando exphbs
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join( app.get('views'), 'layouts'),
    partialsDir: path.join( app.get('views'), 'partials'),
    helpers: require('./lib/helpers')

}));

//midleweares
app.use(express.json()); //para que el server reconozca jsons
app.use(express.urlencoded({extended: false}));//interpretar datos de formulario



//rutas

//archivos estaticos

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});
