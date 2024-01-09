const {pool} = require("../../../../db/db.pool");
const {Client} = require('discord-rpc');

module.exports = async (req, res) => {
    const {id, musicId} = req.body;
    pool.query('UPDATE users SET hearing = $2 WHERE id = $1', [id, musicId]);

    
    res.json({message: 'OK!'})
}