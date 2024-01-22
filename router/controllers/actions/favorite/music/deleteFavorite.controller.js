const {pool} = require("../../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userId, musicId} = req.body;

    try {
        await pool.query('DELETE FROM userfavorites WHERE musicid = $1 AND userid = $2', [musicId, userId]);
    } catch (e) {
        return res.send('Ошибка!')
    }

    res.send('Сделано!');
}