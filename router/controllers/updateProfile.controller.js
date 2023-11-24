const fs = require('fs');
const {pool} = require("../../db/db.pool");

module.exports = async (req, res) => {
    const {id, name, description, gender, location, image} = req.body;
    if (name.length) {
        await pool.query('UPDATE users SET username = $2 WHERE id = $1', [id, name])
    }
    if (description.length) {
        await pool.query('UPDATE users SET description = $2 WHERE id = $1', [id, description])
    }
    if (gender.length) {
        await pool.query('UPDATE users SET gender = $2 WHERE id = $1', [id, gender.toLowerCase()])
    }
    if (location.length) {
        await pool.query('UPDATE users SET location = $2 WHERE id = $1', [id, location])
    }
    if (image.length) {
        const base64data = image.replace(/^data:image\/png;base64,/, "");
        // получает изображение в виде base64

        if (fs.existsSync(`images/users/${id}`)) {
            // если папка с айди юзера существует, ничего не делает
        } else {
            fs.mkdir(`images/users/${id}`, (err) => {
                console.log(err)
            })
            // если его не существует, создаёт папку с id пользователя
        }
        fs.writeFile(`images/users/${id}/avatar.png`, base64data, 'base64', () => {})
        // пишет/обновляет файл с названием avatar, сконвертированный из base64 в файл с расширением .png
        await pool.query('UPDATE users SET avatar = $2 WHERE id = $1', [id, `http://localhost:3000/images/users/${id}/avatar.png`])
    }
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    const user = response.rows[0]
    console.log(user)

    res.json({username: user.username, avatar: user.avatar})
}