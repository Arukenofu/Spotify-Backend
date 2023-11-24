const {pool} = require("../../db/db.pool");
module.exports = async (req, res) => {
    const {id} = req.body;
    if (id.length < 0) {
        res.json('Ошибка')
    }

    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    // получает пользователя по айди
    res.json(response.rows);
}