const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {subscriber, subscribe} = req.body;

    try {
        const data = await pool.query('INSERT INTO usersubscribes (subscriber, subscribe) VALUES ($1, $2) RETURNING id', [subscriber, subscribe]);
        console.log(data.rows)
    } catch {
        return res.send('Уже подписан!')
    }
    res.send('OK!');
}