const {pool} = require("../../db/db.pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }

        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.MY_SECRET, {expiresIn: "2h"});

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }
        res.status(201).json({token: token, id: user.id, email: user.email, username: user.username, avatar: user.avatar})
    } catch (error) {
        res.status(400).json({ message: 'Authentication error' });
    }
}