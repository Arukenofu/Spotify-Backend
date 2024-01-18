const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {musicId, userId} = req.body;

    const data = await pool.query('SELECT * FROM userfavorites WHERE userid = $1 AND musicid = $2', [userId, musicId]);

    const send = !!data.rows.length;

    res.status(200).json(send)
}