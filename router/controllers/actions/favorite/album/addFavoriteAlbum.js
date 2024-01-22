const {pool} = require("../../../../../db/db.pool");
module.exports = async (req, res) => {
    const {userid, albumid} = req.body;

    try {
        await pool.query('INSERT INTO useralbums (userid, albumid) VALUES ($1, $2) RETURNING id', [userid, albumid]);
    } catch {
        return res.status(400).json({message: 'Оно уже добавлено в ваш список'});
    }

    res.status(200).json({message: 'OK!'});
}