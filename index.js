const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// handlebars
const exphbs = require('express-handlebars');

// configuraciones
//app.set es para establecer
app.set('port', process.env.PORT || 3000);

// handlebars
// vamos a darle las direcciones al handlebars con el path.join para que busque la carpeta
// el __dirname(para saber donde esta parado) luego especificamos el nombre de la carpeta ('views')
app.set('views', path.join(__dirname, 'views'));
    //para reemplazar la palabra handlebars por .hbs, vamos a configurar rutas a nivel del proyecto
    // engine es un metodo de handlebars, se usa para decirle al sistema como renderizar los handlebars
    app.engine('.hbs', exphbs({
        // es donde se van a cargar los componentes
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        // extencion del nombre .hbs
        extname: '.hbs'
    }));
    // 
    app.set('view engine', '.hbs');

// middlewares 
// nos va mostrar por consola lo que estamos haciendo
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes, el archivo que me va tenes las rutas

app.use('/', require('./routes/index'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/form'));
app.use('/', require('./routes/user'));

// static files
// 
app.use('/public', express.static(path.join(__dirname, './public')));


// escuchar el servidor mandando mensaje a consola

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});