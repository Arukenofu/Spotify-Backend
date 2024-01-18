const {pool} = require("../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userID} = req.body;
    console.log(userID);

    const favorites = await pool.query('SELECT userFavorites.musicId, musicdata.* FROM userFavorites JOIN musicdata ON userFavorites.musicId = musicdata.id JOIN users ON userFavorites.userId = users.id WHERE userFavorites.userId = $1 AND users.showfavorites = true ORDER BY userfavorites.id DESC', [userID]);

    res.status(200).json(favorites.rows);
}