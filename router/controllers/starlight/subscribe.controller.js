const {pool} = require("../../../db/db.pool");
module.exports = async (req, res) => {
    const {id} = req.body;

    await pool.query('UPDATE users SET isstarlight = true WHERE id = $1', [id]);

    res.send('OK!');
}