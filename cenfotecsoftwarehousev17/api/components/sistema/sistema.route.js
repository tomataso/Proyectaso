'use strict';
// MODIFICADO 14/7/2018 AGREGAR VERSION
const express = require('express');
const router = express.Router();
const parametro = require('./sistema.api');
const util = require('util');


router.route('/registrarParametros')
    .post(function(req, res){
    parametro.registrar(req, res);
});

router.route('/obtenerPagina')
    .get(function(request, response){
    response.sendfile('public/html/'+request.query.url); //'public/html/estudiante/indexTablaEstud.html'
});

module.exports = router;