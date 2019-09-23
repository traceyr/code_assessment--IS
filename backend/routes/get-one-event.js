'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

let rowKey = '973';
//
router.get('/', (req, res, next) => {
  axios.get(`${common.baseUrl}/read/${rowKey}`, { headers: {
    'Content-Type' : 'application/json',
    'X-API-KEY' : process.env.API_KEY
  } })
    .then(results => {
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err.response);
      res.send(err.response.data);
    });
});

router.post('/', (req, res, next) => {
  console.log('in put');
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
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err.response);
      res.send(err.response.data);
    });
});

module.exports = router;
