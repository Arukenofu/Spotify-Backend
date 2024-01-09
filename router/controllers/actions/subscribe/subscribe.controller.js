const {pool} = require("../../../../db/db.pool");
module.exports = async (req, res) => {
    const {subscriber, subscribe} = req.body;

    try {
        await pool.query('DELETE FROM usersubscribes WHERE subscriber = $1 AND subscribe = $2', [subscriber, subscribe]);
    } catch {
        return res.send('Вы и не подписывались!')
    }
    res.send('OK!');
}