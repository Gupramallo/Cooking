require('dotenv').config(); 
var mongoose= require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.URL)
        .then(()=>{


            //Crear Servidor
            app.listen(port,()=>{
                console.log('Servidor montado en localhost:'+ port)
            })
        })
        .catch(error => console.log(error))
