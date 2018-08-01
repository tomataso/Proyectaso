'use strict';

const express = require('express');
const router = express.Router();
const mensaje = require('./mensaje.api');



router.route('/listarMensajes')
    .get(function(req, res){
    mensaje.listar(req, res);
});

module.exports = router;




module.exports = router;