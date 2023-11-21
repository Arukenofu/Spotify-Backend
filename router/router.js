const express = require('express')

const checkTokenMiddleware = require("./middlewares/checkToken.middleware");
const router = express.Router();

const register = require('./controllers/register.controller')
router.post('/register', register);

const login = require('./controllers/login.controller')
router.post('/login', login);

const checkToken = require('./controllers/check-token.controller')
router.get('/checkToken', checkTokenMiddleware, checkToken)

const users = require('./controllers/users.controller')
router.get('/users', users)

const musics = require('./controllers/musics.controller')
router.get('/musics', musics);

const singleMusic = require('./controllers/single-music.controller')
router.get('/musics/:id', checkTokenMiddleware, singleMusic);

const albums = require("./controllers/albums.controller");
router.get('/albums/', albums);

const getAlbum = require("./controllers/get-album.controller");
router.get('/albums/:id', checkTokenMiddleware, getAlbum);

const getColors = require("./controllers/get-colors.controller");
router.post('/color', getColors)

const avatar = require('./controllers/avatar.controller');
router.post('/avatar', avatar);

module.exports = router;