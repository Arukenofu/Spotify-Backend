const {pool} = require("../../../db/db.pool");

module.exports = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, avatar, username, CASE WHEN users.showlastmusic = true THEN hearing ELSE NULL END AS hearing FROM users');
        res.json(result.rows)
    } catch (e) {
        console.log(e)
    }
    // получает всех пользователей
}