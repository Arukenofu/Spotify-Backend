const express = require('express')
const checkTokenMiddleware = require("./middlewares/checkToken.middleware");
const isStarlightMiddleware = require('./middlewares/isStarlight.middleware');

const api = express.Router();

const register = require('./controllers/authentication/register.controller')
api.post('/register', register);

const login = require('./controllers/authentication/login.controller')
api.post('/login', login);

const checkToken = require('./controllers/authentication/check-token.controller')
api.get('/checkToken', checkTokenMiddleware, checkToken)
// 1 параметр роут, второй мидлвейл, третий контроллер

const users = require('./controllers/user/users.controller')
api.get('/users', users)

const getUser = require('./controllers/user/get-user.controller');
api.post('/user', checkTokenMiddleware, getUser);

const musics = require('./controllers/music/musics.controller')
api.get('/musics', musics);

const singleMusic = require('./controllers/music/single-music.controller')
api.get('/musics/:id', checkTokenMiddleware, singleMusic);

const albums = require("./controllers/music/albums.controller");
api.get('/albums', albums);

const getAlbum = require("./controllers/music/get-album.controller");
api.get('/albums/:id', checkTokenMiddleware, getAlbum);

const getColors = require("./controllers/other/get-colors.controller");
api.post('/color', getColors)

const updateProfile = require('./controllers/actions/userconfig/updateProfile.controller');
api.post('/update', checkTokenMiddleware, updateProfile);

const setPlayingMusic = require('./controllers/actions/userconfig/setPlayingMusic.controller');
api.post('/updateMusic', checkTokenMiddleware, setPlayingMusic);

const deleteAccount = require('./controllers/authentication/deleteAccount.controller');
api.post('/deleteAccount', checkTokenMiddleware, deleteAccount)

const changeUser = require('./controllers/actions/userconfig/changeUserVisibility.controller');
api.post('/userVisibility', checkTokenMiddleware, changeUser);

const changeMusicVisibility = require('./controllers/actions/userconfig/changeVisibilityMusic.controller');
api.post('/musicVisibility', checkTokenMiddleware, changeMusicVisibility);

const changeFavoriteVisibility = require('./controllers/actions/userconfig/changeFavoriteVisibility.controller');
api.post('/changeFavoriteVisibility', checkTokenMiddleware, changeFavoriteVisibility);

const privateUserSettings = require('./controllers/user/userPrivate.controller');
api.post('/private', checkTokenMiddleware, privateUserSettings);

const searchUsers = require('./controllers/user/searchusers.controller');
api.post('/search', checkTokenMiddleware, searchUsers);

const getUserSave = require('./controllers/user/getUser-save.controller');
api.post('/userProfile', getUserSave);

const addToFavorites = require('./controllers/actions/favorite/music/addFavorite.controller');
api.post('/addFavorite', checkTokenMiddleware, addToFavorites);

const deleteFavorite = require('./controllers/actions/favorite/music/deleteFavorite.controller');
api.post('/deleteFavorite', checkTokenMiddleware, deleteFavorite);

const getFavorites = require('./controllers/actions/favorite/music/getFavorite.controller');
api.post('/getFavorites', getFavorites);

const getFavorite = require('./controllers/actions/favorite/music/getFavorite-safe.controller');
api.post('/getFavorite', checkTokenMiddleware, getFavorite);

const isLiked = require('./controllers/actions/favorite/music/isLiked.controller');
api.post('/isLiked', checkTokenMiddleware, isLiked);

const subscribe = require('./controllers/actions/subscribe/subscribe.controller');
api.post('/subscribe', checkTokenMiddleware, subscribe);

const unSubscribe = require('./controllers/actions/subscribe/unsubscribe.controller');
api.post('/unSubscribe', checkTokenMiddleware, unSubscribe);

const getSubscribes = require('./controllers/actions/subscribe/getSubscribes.controller')
api.post('/getSubscribes', getSubscribes);

const isSubscribed = require('./controllers/actions/subscribe/isSubscribed.controller');
api.post('/isSubscribed', checkTokenMiddleware, isSubscribed)

const isStarlight = require('./controllers/starlight/isStarlight.controller');
api.post('/isStarlight', checkTokenMiddleware, isStarlight);

const subscribeStarlight = require('./controllers/starlight/subscribe.controller');
api.post('/subscribeStarlight', checkTokenMiddleware, subscribeStarlight);

const setGif = require('./controllers/starlight/setGifAvatar.controller');
api.post('/setGif', isStarlightMiddleware, setGif);

const addFavoriteAlbum = require('./controllers/actions/favorite/album/addFavoriteAlbum');
api.post('/addFavoriteAlbum', checkTokenMiddleware, addFavoriteAlbum);

const deleteFavoriteAlbum = require('./controllers/actions/favorite/album/deleteFavoriteAlbum');
api.post('/deleteFavoriteAlbum', checkTokenMiddleware, deleteFavoriteAlbum);

const isFavoriteAlbum = require('./controllers/actions/favorite/album/isFavorite');
api.post('/isFavoriteAlbum', checkTokenMiddleware, isFavoriteAlbum);

const getFavoriteAlbumsId = require('./controllers/actions/favorite/album/getFavoriteAlbums');
api.post('/getFavoriteAlbumsId', checkTokenMiddleware, getFavoriteAlbumsId);

const getSubscribers = require('./controllers/actions/subscribe/getSubscribers');
api.post('/getSubscribers', checkTokenMiddleware, getSubscribers);

module.exports = api;