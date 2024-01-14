const {pool} = require("../../../db/db.pool");

module.exports = async (req, res) => {
    const {id} = req.body;

    const data = await pool.query('SELECT showlastmusic, showinsearch, showfavorites FROM users WHERE id = $1', [id]);

    res.status(201).json(data.rows);
}