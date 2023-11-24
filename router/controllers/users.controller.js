const {pool} = require("../../db/db.pool");

module.exports = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, avatar, username, hearing FROM users');
        res.json(result)
    } catch (e) {
        console.log(e)
    }
    // получает всех пользователей
}