const {pool} = require("../../../../db/db.pool");
const fs = require("fs");

module.exports = async (req, res) => {
    const {id, value} = req.body;
    console.log(id, value)

    const resp = await pool.query('UPDATE users SET showinsearch = $1 WHERE id = $2', [value, id]);

    console.log(resp);

    res.status(201).send('OK!');
}