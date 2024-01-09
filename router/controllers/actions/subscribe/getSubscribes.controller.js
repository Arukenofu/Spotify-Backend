const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {userID} = req.body;

    const subscribes = await pool.query('SELECT users.id, users.username, users.avatar, users.description, CASE WHEN users.showlastmusic = true THEN hearing ELSE NULL END AS hearing FROM usersubscribes JOIN users ON usersubscribes.subscribe = users.id WHERE usersubscribes.subscriber = $1', [userID]);

    res.status(200).json(subscribes.rows);
}