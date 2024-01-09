const {pool} = require("../../../../db/db.pool");

module.exports = async (req, res) => {
    const {subscribe, subscriber} = req.body;

    const data = await pool.query('SELECT * FROM usersubscribes WHERE subscribe = $1 AND subscriber = $2', [subscribe, subscriber]);
    console.log(data.rows);

    const send = !!data.rows.length;

    res.status(200).json(send)
}