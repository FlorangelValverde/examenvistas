const pool = require('../database');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helpers = require('../libs/helpers');
const refreshTokens = [];
const secret = "uva-exa2-hgmp-access-token";
const refreshTokenSecret = "uva-exa2-hgmp-refresh-access-token";

const authCtrl = {}

authCtrl.createUsuario = async(req, res) => {
    try {
        const { username, password } = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(username, password, estado) values($1,$2, 1)', [username, password2]);

        return res.status(200).json(
            `Usuarios ${ username } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
authCtrl.login = async(req, res) => {
    try {
        const { username, password } = req.body;
        //console.log(pass);
        const response = await pool.query('select * from usuario where username = $1', [username]);
        if (response.rows.length != 0) {
            const passold = response.rows[0].password;
            if (await bcrypt.compare(password, passold)) {
                const usuario = {
                    idusuario: response.rows[0].idusuario,
                    username: response.rows[0].nomuser
                }
                const accessToken = jwt.sign({ usuario }, secret, { expiresIn: '7200s' });
                const refreshToken = jwt.sign({ usuario }, refreshTokenSecret);
                refreshTokens.push(refreshToken);




                return res.status(200).json({
                    accessToken,
                    refreshToken

                });
            } else {
                return res.status(403).json({
                    message: 'Username o Password incorrectos...!'
                });
            }
        }
        return res.status(403).json({
            message: 'Username o Password incorrectos...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error al validar usuario...!' });
    }
};

module.exports = authCtrl;