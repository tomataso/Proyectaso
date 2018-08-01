'use strict';
let mongoose = require('mongoose');
// MODIFICADO 13/7/2018 AGREGAR VERSION
let ProfesorSchema = new mongoose.Schema({

    Nombre : {type : String, required : true},
    Apellido : {type : String, required : true},
    Cedula : {type : String, required: true},
    Telefono : {type : String, required: true},
    Correo : {type : String, required : true},

    Provincia : {type : String, required: true},
    Canton : {type : String, required: true},
    Distrito : {type : String, required: true},
    DireccionExacta : {type : String, required: true},


    GAcademico :  {type : String, required : true},
    Aexperiencia : {type : Number, required : true},
    CImpartidos :  {type : String, required : true},

    TipoProfesor : {type : String, required : true},
    Desactivado : {type : Boolean, required : true}, 
    Contrasenna : {type: String, required: true},
    TipoUsuario: {type: Number, required: true}

    
});

module.exports = mongoose.model('Profesor', ProfesorSchema);