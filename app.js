const express = require('express');
const httpProxy = require('express-http-proxy');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');
const userServiceProxy = httpProxy('https://porxy-middlewares');

require('dotenv').config();
const auth = require('./routes/auth');
//const test = require('./routes/test');



const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//세션을 이용
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }));


app.use('/auth', auth);

app.use((req, res, next) => {
    //Todo : Authentication

    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
  });
  
  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });