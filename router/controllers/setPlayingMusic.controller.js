const {pool} = require("../../db/db.pool");
module.exports = (req, res) => {
    const {id, musicId} = req.body;
    pool.query('UPDATE users SET hearing = $2 WHERE id = $1', [id, musicId]);
    // обновляет статус текущей играющей музыки(по айди)

    res.json({message: 'OK!'})
}