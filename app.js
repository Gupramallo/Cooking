var express = require('express');
var cors = require('cors')
var app = express();


//Cargar el archivo de las rutas
var recepie_routes = require('./routes/recepie');

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Rutas
app.use(cors());
app.use('/api', recepie_routes);



//Exportar

module.exports= app;