const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router
/* ruta de prueba
router.get('/ejemplo', (req, res) =>{
    res.end('saludos camarada humano')
})*/
// agregar usuarios
router.post('/agregarusuario', async (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });

    try {
        await nuevousuario.save();
        res.send('Usuario agregado correctamente');
    } catch (error) {
        res.status(500).send(error);
    }
});
//obtener los usuarios
router.get('/obtenerusuarios', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({});
        res.send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

//obtener datos de los usuarios
router.post('/obtenerdatausuario', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({idusuario:req.body.idusuario});
        res.send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/actualizausuario', async (req, res) => {
    try {
        const filter = { idusuario: req.body.idusuario };
        const update = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        };

        // Actualiza el usuario
        await ModeloUsuario.findOneAndUpdate(filter, update);

        // Busca el usuario actualizado
        const usuarioActualizado = await ModeloUsuario.findOne(filter);

        if (!usuarioActualizado) {
            return res.status(404).send('Usuario no encontrado');
        }

        res.send('Usuario actualizado');
    } catch (error) {
        res.status(500).send(error);
    }
});

//borrar usuario
router.delete('/borrarusuario/:idusuario', async (req, res) => {
    const idUsuario = req.params.idusuario;

    try {
        // Verificar si el usuario existe antes de borrarlo
        const usuarioExistente = await ModeloUsuario.findOne({ idusuario: idUsuario });

        if (!usuarioExistente) {
            return res.status(404).send('Usuario no encontrado');
        }

        // Borrar el usuario
        await ModeloUsuario.findOneAndDelete({ idusuario: idUsuario });

        res.send('Usuario borrado correctamente');
    } catch (error) {
        res.status(500).send(error);
    }
});

