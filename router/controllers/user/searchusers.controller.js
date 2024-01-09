const {pool} = require("../../../db/db.pool");
module.exports = async (req, res) => {
    const {value, id} = req.body;

    if (value === '') {
        res.status(201).json([]);
        return;
    }

    const data = await pool.query('SELECT id, avatar, username, description FROM users WHERE LOWER(username) LIKE LOWER($1) AND showinsearch = true AND id <> $2', ['%' + value + '%', id])
    console.log(data.rows)
    res.status(201).json(data.rows);
}