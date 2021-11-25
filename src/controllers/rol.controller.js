const pool = require('../database');

const rolCtr = {}

/////// Listar alumno
rolCtr.readRol = async(req, res) => {
    try {
        const response = await
        pool.query('select *from rol;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}


/////// create
rolCtr.createRol = async(req, res) => {
    try {
        const { nombre } = req.body;
        await pool.query('INSERT INTO rol(nombre) VALUES ($1);', [nombre]);
        return res.status(200).json(
            `Rol ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

///////listar por id 
rolCtr.readRolID = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from rol where idrol=$1;', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//////// modificar alumno
rolCtr.updateRol = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        const response = await pool.query('UPDATE rol set nombre = $1 where idrol = $2', [nombre, id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

/////////////////////// ELIMINAR ALUMNO
rolCtr.deleteRol = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from rol where idrol=$1', [id]);
        return res.status(200).json(
            `Rol ${ id } eliminado correctamente :D ...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = rolCtr;