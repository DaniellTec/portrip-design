const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correct a monngodb')})
objetobd.on('error', ()=>{console.log('error a la conexion monngodb')})

module.exports = mongoose