'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

let indexRouter = require('./routes/get-all-events');
let createRouter = require('./routes/create-event');
let deleteRouter = require('./routes/delete-event');
let modifyRouter = require('./routes/get-one-event');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true }));

app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/delete', deleteRouter);
app.use('/modify', modifyRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
