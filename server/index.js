/*
1. crear el servidor
2. crear las rutas
3. capturar desde el front end la informacion en estas rutas usando ajax
4. concatenar con el html
*/

const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const Server = http.createServer(app);
const port = process.env.PORT || 3000;
const data = require('./Storage/router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//location of static files (html, css, js, etc)
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', data);


Server.listen(port, ()=>{
  console.log('Buscador listo en puerto 3000');
});
