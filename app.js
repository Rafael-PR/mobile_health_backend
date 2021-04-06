require('dotenv').config();
require('./database/client');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const clientRouter = require('./routes/clientRouter');
const bookingRouter = require('./routes/bookingRouter')
const usersRouter = require('./routes/users');
const therapistRouter = require('./routes/therapistRouter');
const authentificationRouter = require('./routes/authentificationRouter');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/client', clientRouter);
app.use('/therapist',therapistRouter);
app.use('/booking', bookingRouter);
app.use('/auth',authentificationRouter);



module.exports = app;
