const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const statisticsRouter = require('./routes/stats');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/todos', todosRouter);
app.use('/statistics', statisticsRouter);

module.exports = app;
