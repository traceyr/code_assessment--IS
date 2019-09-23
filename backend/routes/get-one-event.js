'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.post('/', (req, res, next) => {
  let newDate = req.body.dateTime;
  let justDate = newDate.split('T')[0] + 'T00:00:00.0000Z' ;
  let sendDataJSON = {
    'data': {
      'id': req.body.id,
      'date': justDate,
      'name': req.body.name,
      'dateTime': req.body.dateTime,
      'duration': req.body.duration,
      'brief': req.body.brief,
    }
  };
  axios.put(`${common.baseUrl}/update/${req.body.id}`, sendDataJSON, { headers: {
    'Content-Type' : 'application/json',
    'X-API-KEY' : process.env.API_KEY
  }})
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.send(err.response.data);
    });
});

module.exports = router;
