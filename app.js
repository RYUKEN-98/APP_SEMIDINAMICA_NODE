

/*Importar paquetes como el express
Para crear Webserver en un entorno Local 
*/

const express = require('express');
const app = express();
const port = 9595;
//Const port =9595;

//Importar el paquete de dotenv

require('dotenv').config();
constport = process.env.PORT;

// Mostrar contenido de la carpeta public 
app.use(express.static('public'));

app.get('/left-sidebar', (req, res) => {
    //Utilizar el res, para responder a la peticion del usuario
    res.sendfile(__dirname + '/public/left-sidebar.html')
});

app.get('/right-sidebar', (req, res) => {
    //Utilizar el res, para responder a la peticion del usuario
    res.sendfile(__dirname + '/public/right-sidebar.html')
});

app.get('/no-sidebar', (req, res) => {
    //Utilizar el res, para responder a la peticion del usuario
    res.sendfile(__dirname + '/public/no-sidebar.html')
});

app.get('*', (req, res) => {
    //El comodin o *, es para validar la busqueda de una pagina
    //Utilizar el res, para responder a la peticion del usuario
    res.sendfile(__dirname + '/public/404.html')
});


//* se necesita activar el puerto pára el WebServer
app.listen(port, () => {
    console.log('Webserver activo en el puerto ${port}?')
})
