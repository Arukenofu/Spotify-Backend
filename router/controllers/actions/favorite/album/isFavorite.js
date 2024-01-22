const {pool} = require("../../../../../db/db.pool");
module.exports = async (req, res) => {
    const {albumid, userid} = req.body;

    const data = (await pool.query('SELECT * FROM useralbums WHERE userid = $1 AND albumid = $2', [userid, albumid]))

    const send = !!data.rows.length

    res.send(send)
}