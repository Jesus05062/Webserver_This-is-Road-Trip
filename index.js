require('dotenv').config();

const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;

//Handlebars-libreria hbs
//TODO: require('hbs');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico
app.use( express.static( 'public' ))

app.get('/', (req, res) => { 
    res.render('home', {
        nombre: 'Jesus Cabrera',
        titulo: 'Curso Node',
    });
});
 
app.get('/generic', (req,res ) => {
    res.render( 'generic', {
        nombre: 'Jesus Cabrera',
        titulo: 'Curso Node',
    })
});

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Jesus Cabrera',
        titulo: 'Curso Node',
    })
});

//  * = comodin
app.get('/*',  (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
});

app.listen( port , () => {
    console.log(`La aplicación ejemplo esta corriendo en el puerto http://localhost:${port}`);
});