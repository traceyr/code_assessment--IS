'use strict';

const router = require('express').Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  let baseUrl = 'https://crud-api.azurewebsites.net';
  console.log('hello');
  axios.get(`${baseUrl}/api/peek`, {
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : '5d85d4d9-1f36-47ab-ab6c-01acfe5b96da'
    }
  })
    .then(results => {
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
