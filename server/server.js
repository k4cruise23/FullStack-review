require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const authCtrl = require('./controllers/authController')
const gamesCtrl = require('./controllers/gamesCtrl')

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.get('/api/games', gamesCtrl.getGames)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} gay nerds making our way down town`))
})