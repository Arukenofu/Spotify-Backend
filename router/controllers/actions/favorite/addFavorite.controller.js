const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {userId, musicId} = req.body;

    try {
        await pool.query('INSERT INTO userFavorites (musicid, userid) VALUES ($1, $2) RETURNING id', [musicId, userId]);
    } catch (e) {
        return res.status(200).json({message: 'Оно уже добавлено в ваш список'});
    }

    res.status(200).json({message: 'OK!'});
}