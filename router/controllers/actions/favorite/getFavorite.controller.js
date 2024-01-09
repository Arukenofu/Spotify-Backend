const {pool} = require("../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userID} = req.body;

    const favorites = await pool.query('SELECT userFavorites.musicId, musicdata.* FROM userFavorites JOIN musicdata ON userFavorites.musicId = musicdata.id WHERE userFavorites.userId = $1', [userID]);

    res.status(200).json(favorites.rows);
}