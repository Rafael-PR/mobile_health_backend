require('dotenv').config();
require('./database/client');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const clientRouter = require('./routes/clientRouter');
const therapistRouter = require('./routes/therapist');
const categoryRouter = require('./routes/category');
const bookingRouter = require('./routes/bookingRouter')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/client', clientRouter);
app.use('/therapist',therapistRouter);
app.use('/category',categoryRouter);
app.use('./booking', bookingRouter)

module.exports = app;
