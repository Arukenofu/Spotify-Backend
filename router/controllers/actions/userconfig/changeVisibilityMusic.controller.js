const {pool} = require("../../../../db/db.pool");
module.exports = async (req, res) => {
    const {id, value} = req.body;

    pool.query('UPDATE users set showlastmusic = $1 WHERE id = $2', [value, id]);

    res.status(201).send('OK!');
}