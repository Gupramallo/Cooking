var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecepieSchema = Schema({
    name: String,
    card_text: String,
    img: String,
    ingredients: [],
    recepie: String
});

module.exports = mongoose.model('Recepie', RecepieSchema);