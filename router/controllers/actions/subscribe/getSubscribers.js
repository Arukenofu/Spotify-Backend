const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {userID} = req.body;

    const subscribers = await pool.query('SELECT subscriber FROM usersubscribes WHERE subscribe = $1', [userID]);

    res.status(200).json(subscribers.rows.length);
}