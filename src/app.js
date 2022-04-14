const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const session = require('express-session'); // Express-session Module
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'gfdtrdthfhjgbhjkghkjgj165498465',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(cookieSession);


app.set("view engine", "ejs") // Setea el template engine
app.set('views', path.join(__dirname, 'views'))


let indexRouter = require('./routes/indexRouter.js')

app.use('/', indexRouter)

app.use((req, res, next) => {
    res.status(404).render('404-page')
})

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))