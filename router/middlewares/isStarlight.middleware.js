const {pool} = require("../../db/db.pool");

const checkToken = async (req, res, next) => {
    const {id} = req.body;

    const isStarlight = (await pool.query('SELECT isstarlight FROM users WHERE id = $1', [id])).rows;

    if (!isStarlight) {
        return res.send('NO');
    }

    next()
}

module.exports = checkToken