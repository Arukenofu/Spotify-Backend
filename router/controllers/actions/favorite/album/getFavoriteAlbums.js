const {pool} = require("../../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userid} = req.body;

    const favs = (await pool.query('SELECT albumid FROM useralbums WHERE userid = $1', [userid])).rows;
    console.log(favs);

    res.send(favs);
}