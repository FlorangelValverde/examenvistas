const pool = require('../database');
const helpers = require('../libs/helpers');

const usuariosCtr = {}

// LISTAR TODOS LOS USUARIOS
usuariosCtr.readAllUsuario = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// LISTAR USUARIOS POR ID
usuariosCtr.readUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

// ELIMINAR USUARIOS
usuariosCtr.delUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuarios=$1', [id]);

        return res.status(200).json(
            `Usuarios ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}



// ACTUALIZAR USUARIOS
usuariosCtr.updateUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { username, password } = req.body;
        await pool.query('update usuario set username=$1, password=$2 where idusuario=$3', [username, password, id]);

        return res.status(200).json(
            `Usuarios ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = usuariosCtr;