<h3>Структура проекта</h3>

<b>/db/</b> - Необходимые данные для работы с БД <br>
<b>/images/</b> - Хранилище, содержащее изображения альбомов и аватарок юзеров, нужно создать папки для их собственных альбомов <br>
<b>/music/</b> - Папка со всеми песнями<br>
<b>/router/</b> - роуты для API <br>
<ul>
    <li><b>/router/conrollers/</b> - Контроллеры <br></li>
    <li><b>/router/middlewares/</b> - Мидлвейры <br></li>
    <li><b>/router/api.js</b> - Файл со всеми роутами <br></li>
</ul>
<b>.env</b> - секретный ключ для токенов<br>
<b>index.js</b> - Корневой файл, в нём содержатся некоторые конфигурации, а также роуты для хоста папок /images и /music <br>


<h1>Ендпоинты</h1>
<p>GET /music</p>

```
// localhost:3000/music/[имя музыки] - сама музыка
```

<p>GET /images</p>

```
// localhost:3000/images/albums/[изображение альбома] - изображение альбома
// localhost:3000/images/users/[id юзера]/avatar.png - аватар пользовтаеля
```

<p>POST /register</p>
<p>В теле запроса - email, username, password</p>

```
if (sucess) {
    return 'Success'
} else {
    return error
}
```

<p>POST /login</p>
<p>В теле запроса - email, password</p>

```
if (sucess) {
    return {
        token: 'token',
        id: 1,
        email: 'email',
        avatar: 'avatarUrl'
    }
} else {
    return {
        message: 'Authentication error'
    }
}
```

<p>GET /checkToken</p>
<p>В теле запроса - token</p>

```
if (sucess) {
    return 'Success!'
    
if (!token) {
    return {
        message: "Токен Отсутсвует"
    }
}

if (!sucess) {
    return {
        message: 'Неверный токен'
    }
}
```

<p>GET /users</p>
<p>Нужно проверить токен</p>

```
if (sucess) {
    return [
        {
            id: 1,
            avatar: 'urlAvatar',
            hearing: last heared music as integer id to music,
            username: 'username'
        },
        {
            id: 2,
            avatar: 'urlAvatar',
            hearing: last heared music as integer id to music,
            username: 'username'
        }
    ]
}
```

<p>GET /musics/:id</p>
<p>Нужно проверить токен</p>
<p>В теле запроса - id</p>

```
if (sucess) {
    return [
        {
            id: 1,
            avatar: 'urlAvatar',
            hearing: last heared music as integer id to music,
            username: 'username'
        }
    ]
}

if (!token) {
    return 'Ошибка'
}

if (!sucess) {
    return {
        message: 'Неверный токен'
    }
}
```

<p>GET /musics</p>
глобальная музыка

```
if (sucess) {
    return [
        {
            id: 1,
            image: 'imageUrl',
            name: 'Musicname'
            singer: 'musicSinger',
            song: 'songUrl'б
            auditions: количество прослушиваний как integer
        },
        {
            id: 2,
            image: 'imageUrl',
            name: 'Musicname'
            singer: 'musicSinger',
            song: 'songUrl'б
            auditions: количество прослушиваний как integer
        }
    ]
}
```

<p>GET /albums</p>
глобальные альбомы

```
if (sucess) {
    return [
        {
            id: 0,
            name: "albumname",
            description: "description",
            picture: "albumImageUrl",
            musics: [
                {
                    id: 1,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl'б
                    auditions: количество прослушиваний как integer
                },
                {
                    id: 2,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl'б
                    auditions: количество прослушиваний как integer
                }
            ],
        },
        {
            id: 1,
            name: "albumname",
            description: "description",
            picture: "albumImageUrl",
            musics: [
                {
                    id: 1,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl'б
                    auditions: количество прослушиваний как integer
                },
                {
                    id: 2,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl'б
                    auditions: количество прослушиваний как integer
                }
            ],
        }
    ]
}
```

<p>GET /albums/:id</p>
Получить единственный альбом

```
if (sucess) {
    return [
        {
            id: 0,
            name: "albumname",
            description: "description",
            picture: "albumImageUrl",
            musics: [
                {
                    id: 1,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl'б
                    auditions: количество прослушиваний как integer
                },
                {
                    id: 2,
                    image: 'imageUrl',
                    name: 'Musicname'
                    singer: 'musicSinger',
                    song: 'songUrl',
                    auditions: количество прослушиваний как integer
                }
            ],
        }
    ]
}
```

<p>POST /color</p>
<p>В теле запроса - ссылка на изображение как image</p>
Получить первые 5 доминирующих цветов

```
if (sucess) {
    return [
        "#2245db",
        "#151c47",
        "#b4a2bd",
        "#7883c9",
        "#75b0f7",
    ]
}

if (!image) {
    return "нету изображения"
}
```

<p>POST /update</p>
<p>В теле запроса - id, name, description, gender, location, image</p>
Изменить данные пользователя, если есть какое то поле выше - меняются данные, если нету никаких полей, просто пропускается

```
if (length) {
    // поменять
}
if (description) {
    // поменять
}
if (gender) {
    // поменять
}
if (location) {
    // поменять
}
if (image) {
    // получаем с юзера png в base64 кодировке
    
    if (папка localhost:3000/images/users/идентификатор пользователя == существует) {
        // ничего не делать
    } else {
        // создать папку с идентификатором юзера
    }
    
    // затем создаём файл avatar.png в localhost:3000/images/users/идентификатор пользователя/[файл],
    // используя данные с переменного base64, конвертируя файл в png формат
    
    return {
        username: "username",
        avatar: "avatarUrl"
    }
}

if (!token) {
    return 'Ошибка'
}

if (!sucess) {
    return {
        message: 'Неверный токен'
    }
}
```

<p>POST /updateMusic</p>
<p>В теле запроса - id(пользователя), musicId</p>
Обновить текущую музыку

```
if (sucess) {
    return {
        message: "OK!"
    }
}

if (!token) {
    return 'Ошибка'
}

if (!sucess) {
    return {
        message: 'Неверный токен'
    }
}
```

<p>POST /deleteAccount</p>
<p>В теле запроса - {id, email, password}</p>
Удалить пользователя

```
if (!idEmailValid) {
    return { message: 'checkemail error' };
}
if (!isPasswordValid) {
    return { message: 'password valid' };
}
if (sucess) {
    return { message: 'Account deleted.' }
}
```