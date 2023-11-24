const express = require('express')
const checkTokenMiddleware = require("./middlewares/checkToken.middleware");

const api = express.Router();

const register = require('./controllers/register.controller')
api.post('/register', register);

const login = require('./controllers/login.controller')
api.post('/login', login);

const checkToken = require('./controllers/check-token.controller')
api.get('/checkToken', checkTokenMiddleware, checkToken)
// 1 параметр роут, второй мидлвейл, третий контроллер

const users = require('./controllers/users.controller')
api.get('/users', users)

const getUser = require('./controllers/get-user.controller');
api.post('/user', checkTokenMiddleware, getUser);

const musics = require('./controllers/musics.controller')
api.get('/musics', musics);

const singleMusic = require('./controllers/single-music.controller')
api.get('/musics/:id', checkTokenMiddleware, singleMusic);

const albums = require("./controllers/albums.controller");
api.get('/albums/', albums);

const getAlbum = require("./controllers/get-album.controller");
api.get('/albums/:id', checkTokenMiddleware, getAlbum);

const getColors = require("./controllers/get-colors.controller");
api.post('/color', getColors)

const updateProfile = require('./controllers/updateProfile.controller');
api.post('/update', checkTokenMiddleware, updateProfile);

const setPlayingMusic = require('./controllers/setPlayingMusic.controller');
api.post('/updateMusic', checkTokenMiddleware, setPlayingMusic);

const deleteAccount = require('./controllers/deleteAccount.controller');
api.post('/deleteAccount', checkTokenMiddleware, deleteAccount)

module.exports = api;