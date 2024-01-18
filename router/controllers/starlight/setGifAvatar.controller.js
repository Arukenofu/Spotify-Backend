const {pool} = require("../../../db/db.pool");
const fs = require("fs");

module.exports = async (req, res) => {
    const {id, gif} = req.body;

    if (gif?.length) {
        const base64data = gif.replace(/^data:image\/gif;base64,/, "");

        if (fs.existsSync(`images/users/${id}`)) {

        } else {
            fs.mkdir(`images/users/${id}`, (err) => {
                console.log(err)
            })
        }

        fs.writeFile(`images/users/${id}/avatar.gif`, base64data, 'base64', () => {})

        await pool.query('UPDATE users SET avatar = $2 WHERE id = $1', [id, `http://localhost:3000/images/users/${id}/avatar.gif`])
    }

}