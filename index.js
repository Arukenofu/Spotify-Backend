const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {join} = require("path");
const fs = require('fs');
require('dotenv').config()
const routes = require('./router/router')
const {pool} = require("./db/db.pool");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/', routes);

app.use('/music', express.static(join(__dirname + '/music')));
app.use('/images', express.static(join(__dirname + '/images')))


app.listen(port, () => {
  console.log(`Сервер запущен на странице http://localhost:${port}/`);
});