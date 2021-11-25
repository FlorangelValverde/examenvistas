const express = require('express')
const morgan = require('morgan')

const postRoutes = require('./routes/post.routes')
const rolRoutes = require('./routes/rol.routes')
const loginRoutes = require('./routes/login.routes')
const usuarioRoutes = require('./routes/usuarios.routes')

const app = express();
var cors = require('cors');
const { login } = require('./controllers/login.controller');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR CORRIENDO SATISFACTORIAMENTE...!');
});


app.use('/post', postRoutes);
app.use('/rol', rolRoutes);
app.use('/login', loginRoutes);
app.use('/usario', usuarioRoutes);
module.exports = app;