

/*Importar paquetes como el express
Para crear Webserver en un entorno Local 
*/

const express = require('express');
const app = express();
const port = 9696;

// Mostrar contenido de la carpeta public 
app.use(express.static('public'));

app.get('/right-sidebar', (req, res) => {
    //Utilizar el res, para responder a la peticion del usuario
    res.sendfile(__dirname + '/public/left-sidebar.html')
})
