const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'ec2-3-230-149-158.compute-1.amazonaws.com',
    user: 'wmpohqfvymachn',
    password: 'd3acc815d29e6c229ee635713772358c37049971e19c354e1d7a5034d00e47ad',
    database: 'dt2d607s5mrov',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;