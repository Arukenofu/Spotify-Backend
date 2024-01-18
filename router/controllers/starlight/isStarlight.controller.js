const {pool} = require("../../../db/db.pool");

module.exports = async (req, res) => {
    const {id} = req.body;
    console.log(id);

    const isStarlight = (await pool.query('SELECT isstarlight from users WHERE id = $1', [id])).rows[0]?.isstarlight;

    res.send(isStarlight);
}