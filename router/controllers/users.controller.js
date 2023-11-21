const {pool} = require("../../db/db.pool");

module.exports = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, avatar, username, hearing FROM users');
        console.log(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
        res.json(result)
    } catch (e) {
        console.log(e)
    }
}