require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const http = require('http')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketIo = require('socket.io')
const connectToDatabase = require('./database')
const uploadConfig = require('./upload')

const indexRouter = require('../routes/index');

connectToDatabase()
const app = express();

const server = new http.createServer(app)
const io = new socketIo.Server(server)

io.on('connection', socket => {
  console.log('socket is running')
})

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/files', express.static(uploadConfig.directory));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = { server, io }