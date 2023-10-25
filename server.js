const express = require('express')
const app = express()

//importar conexion mongodb
const archivoBD = require('./conexion')

//importacion archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenido a jurassic park')
})

//configurar server basico
app.listen(5000, function(){
    console.log('El servidor NODE render esta corriendo correctamente')
})