const {pool} = require("../../db/db.pool");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.status(401).json({message: 'На сервер отправлены пустые поля'})
    }
    if (email.length < 7) {
        return res.status(401).json({message: 'Почта должна иметь минимум 7 символов'})
    }
    if (username.length < 4) {
        return res.status(401).json({message: 'Имя пользователя должна иметь минимум 4 символов'})
    }
    if (password.length < 6) {
        return res.status(401).json({message: 'Пароль должен содержать минимум 6 символов'})
    }
    const result = await pool.query('SELECT email FROM users WHERE email = $1', [email])

    if (result.rows.length > 0) {
        return res.status(401).json({message: 'This email is already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // создаёт хэшированный пароль, второй параметр это соль
    try {
        await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id',
            [email, username, hashedPassword]
        );
        res.status(201).json('Success');
    } catch (error) {
        res.status(400).json(error);
    }
}