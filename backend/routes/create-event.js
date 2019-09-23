'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.post('/', (req, res, next) => {
  let rowKey = Math.floor(Math.random() * Math.floor(1000));
  let sendDataJSON = {
    'data': {
      'date':'2019-01-01T00:00:00.0000Z',
      'name': 'An Event',
      'dateTime': '2019-01-01T16:00:00.0000Z',
      'duration': '60',
      'brief': 'This is an event description'
    }
  };
  console.log('here');
  axios.post(`${common.baseUrl}/create/${rowKey}`, sendDataJSON, { headers: common.headers })
    .then(results => {
      console.log(results);
      console.log('in here');
      res.send(results.data);
    })
    .catch(err => {
      console.log(err);
      console.log('in err');
      res.send(err);

    });
});

module.exports = router;
