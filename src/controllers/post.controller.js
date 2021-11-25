const pool = require('../database');

const postCtr = {}

/////// Listar alumno
postCtr.readPost = async(req, res) => {
    try {
        const response = await
        pool.query('select *from posts;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}


/////// crear posts
postCtr.createPost = async(req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        await pool.query('INSERT INTO posts(titulo, descripcion) VALUES ($1, $2);', [titulo, descripcion]);
        return res.status(200).json(
            `post ${ titulo } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

///////listar posts por id 
postCtr.readPostID = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from posts where idpost=$1;', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//////// modificar alumno
postCtr.updatePost = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { titulo, descripcion } = req.body;
        const response = await pool.query('UPDATE posts set titulo = $1, descripcion = $2 where idpost = $3', [titulo, descripcion, id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

/////////////////////// ELIMINAR ALUMNO
postCtr.deletePost = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from posts where idpost= $1', [id]);
        return res.status(200).json(
            `Post ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = postCtr;