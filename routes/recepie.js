var express = require('express');
var RecepieController = require('../controllers/recepie');

var router = express.Router();

router.get('/recepie/:id', RecepieController.getRecepie);
router.get('/recepies', RecepieController.getRecepies);
module.exports = router;