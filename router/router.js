const express = require('express')

const checkTokenMiddleware = require("../middlewares/checkToken.middleware");
const router = express.Router();

const register = require('./controllers/register.route')
router.post('/register', register);

const login = require('./controllers/login.route')
router.post('/login', login);

const checkToken = require('./controllers/check-token.route')
router.get('/checkToken', checkTokenMiddleware, checkToken)

const users = require('./controllers/users.route')
router.get('/users', users)

const musics = require('./controllers/musics.route')
router.get('/musics', musics);

const singleMusic = require('./controllers/single-music.route')
router.get('/musics/:id', checkTokenMiddleware, singleMusic);

const albums = require("./controllers/albums.route");
router.get('/albums/', albums);

const getAlbum = require("./controllers/get-album.route");
router.get('/albums/:id', checkTokenMiddleware, getAlbum);

const getColors = require("./controllers/get-colors.route");
router.post('/color', getColors)

const avatar = require('./controllers/avatar.route');
router.post('/avatar', avatar);

module.exports = router;