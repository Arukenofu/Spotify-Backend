const {pool} = require("../../../db/db.pool");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
    const {id, email, password} = req.body;
        const checkEmail = await pool.query('SELECT * FROM users WHERE id = $1 AND email = $2', [id, email]);
        if (checkEmail.rows.length === 0) {
            return res.status(400).json({ message: 'checkemail error' });
        }

        const user = checkEmail.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // сравнивает, одинаковые ли пароли из заголовка запроса и шифрованного пароля из БД

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'password valid' })
        }
        await pool.query('DELETE FROM users WHERE id = $1', [id])

        res.status(201).json({message: 'Account deleted.'})

}