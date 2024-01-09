const fs = require('fs')
const {pool} = require("../../../db/db.pool");

module.exports = async (req, res) => {
    const musicData = await pool.query('SELECT * FROM musicdata')

    res.json(musicData.rows);
}