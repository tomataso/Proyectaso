'use strict';
// MODIFICADO 13/7/2018 AGREGAR VERSION
const express = require('express');
const router = express.Router();
const profesor = require('./profesor.api');


router.route('/registrarProfesores')
    .post(function(req, res){
    profesor.registrar(req, res);
});




router.route('/listarProfesores')
    .get(function(req, res){
        profesor.listar(req, res);
});


router.route('/buscarProfesor')
    .get(function(req, res){
        profesor.buscarProfesor(req, res);
});

router.route('/desactivarProfesor')
    .post(function(req, res){
        profesor.desactivar(req, res);
});

module.exports = router;