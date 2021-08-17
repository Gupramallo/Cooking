var Recepie = require('../models/recepie');

var controller ={
    
    getRecepie: function(req,res){
        var recepieId = req.params.id;

        if(recepieId== null) res.status(404).send({message: 'La receta no existe'});

        Recepie.findById(recepieId,(err,recepie)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!recepie) res.status(404).send({message: 'La receta no existe'});

            return res.status(200).send({
                recepie
            });

        })
    },

    getRecepies: function(req,res){
        Recepie.find({}).sort({name:1}).exec((err,recepies)=>{
            if (err) return res.status(500).send({message: 'Error al devolver los datos'});
                
            if (!recepies) return res.status(404).send({message: 'No se encontro la receta'})
            
            return res.status(200).send({recepies} )

        })
    }
    
};

module.exports = controller;