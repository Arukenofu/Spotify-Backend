const fs = require('fs');
const {pool} = require("../../db/db.pool");

module.exports = async (req, res) => {
    const {id} = req.body;
    const base64data = req.body.image.replace(/^data:image\/png;base64,/, "");

    if (fs.existsSync(`/images/users/${id}`)) {

    } else {
        fs.mkdir(`images/users/${id}`, (err) => {
            console.log(err)
        })
    }

    await pool.query('UPDATE users SET avatar = $2 WHERE id = $1', [id, `http://localhost:3000/images/users/${id}/avatar.png`])

    fs.writeFile(`images/users/${id}/avatar.png`, base64data, 'base64', () => {})
}