const {Pool} = require('pg')

module.exports.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'spotifyUserStore',
    password: 'root',
    port: 9999,
})
