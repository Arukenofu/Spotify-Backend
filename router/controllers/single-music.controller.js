const {pool} = require("../../db/db.pool");


module.exports = async (req, res) => {
    const id = req.params.id;

    const data = await pool.query('SELECT * FROM musicdata WHERE id = $1', [id]);

    res.json(data.rows[0]);
    // получает музыку по id
}