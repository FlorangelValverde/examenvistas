const app = require('./app')

app.listen(process.env.PORT || 3001);

console.log('server listen on port', 3001);