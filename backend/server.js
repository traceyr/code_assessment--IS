'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('./lib/auth');
const cors = require('cors');
const dotenv = require('dotenv');

let listEventsRouter = require('./routes/get-all-events');
let createRouter = require('./routes/create-event');
let deleteRouter = require('./routes/delete-event');
let modifyRouter = require('./routes/get-one-event');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true }));

app.use(cors());
app.use('/check', basicAuth);


app.use('/list', listEventsRouter);
app.use('/create', createRouter);
app.use('/delete/', deleteRouter);
app.use('/update', modifyRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
