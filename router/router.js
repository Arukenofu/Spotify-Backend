const express = require('express')
const {join} = require("path");

const checkTokenMiddleware = require("../middlewares/checkToken.middleware");
const router = express.Router();

const register = require('./routes/register.route')
router.post('/register', register);

const login = require('./routes/login.route')
router.post('/login', login);

const checkToken = require('./routes/check-token.route')
router.get('/checkToken', checkTokenMiddleware, checkToken)

const users = require('./routes/users.route')
router.get('/users', users)

const musics = require('./routes/musics.route')
router.get('/musics', musics);

const singleMusic = require('./routes/single-music.route')
router.get('/musics/:id', checkTokenMiddleware, singleMusic);

const albums = require("./routes/albums.route");
router.get('/albums/', albums);

const getAlbum = require("./routes/get-album.route");
router.get('/albums/:id', checkTokenMiddleware, getAlbum);

const getColors = require("./routes/get-colors.route");
router.post('/color', getColors)

const avatar = require('./routes/avatar.route');
router.post('/avatar', avatar);

module.exports = router;