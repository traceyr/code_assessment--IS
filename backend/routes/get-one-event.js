'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

let rowKey = '973';

router.get('/', (req, res, next) => {
  axios.get(`${common.baseUrl}/read/${rowKey}`, { headers: common.headers })
    .then(results => {
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err.response);
      res.send(err.response.data);
    });
});

router.put('/', (req, res, next) => {
  let sendDataJSON = {
    'data': {
      'date':'2019-01-01T00:00:00.0000Z',
      'name': 'An Event',
      'dateTime': '2019-01-01T16:00:00.0000Z',
      'duration': '60',
      'brief': 'This is an event description'
    }
  };

  axios.put(`${common.baseUrl}/update/${rowKey}`, sendDataJSON, { headers: common.headers })
    .then(results => {
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err.response);
      res.send(err.response.data);
    });
});

module.exports = router;
