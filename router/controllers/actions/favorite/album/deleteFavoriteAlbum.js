const {pool} = require("../../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userid, albumid} = req.body;
    console.log(req.body)

    await pool.query('DELETE FROM useralbums WHERE userid = $1 AND albumid = $2', [userid, albumid]);

    res.send('Сделано!');
}