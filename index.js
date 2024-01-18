const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {join} = require("path");
const fs = require('fs');
require('dotenv').config()
const routes = require('./router/api')
const {pool} = require("./db/db.pool");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// конфигурации для порта, cors, лимитов для заголовков запроса

const musicFolderPath = join(__dirname, 'music')

app.use('/', routes);

app.use('/music', express.static(musicFolderPath));
// серверить папку /music
app.use('/images', express.static(join(__dirname + '/images')))
// серверить папку /images

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = join(musicFolderPath, filename);

  res.download(filePath, (err) => {
    if (err) {
      res.status(500).send('Ошибка при скачивании файла');
    }
  })
})


app.listen(port, () => {
  console.log(`Сервер запущен на странице http://localhost:${port}/`);
});

