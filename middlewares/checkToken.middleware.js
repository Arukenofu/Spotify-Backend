const jwt = require('jsonwebtoken')
require("dotenv").config()

const checkToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({message: "Токен Отсутсвует"})
    }

    jwt.verify(token, process.env.MY_SECRET, (err) => {
        if (err) {
            return res.status(401).json({message: 'Неверный токен'})
        }

        next()
    })
}

module.exports = checkToken