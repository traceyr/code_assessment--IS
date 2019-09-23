'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.delete('/:rowKey', (req, res, next) => {
  console.log(req.params.rowKey);
  console.log('in delete');
  axios.delete(`${common.baseUrl}/remove/${req.params.rowKey}`, {
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : process.env.API_KEY
    }
  })
    .then(results => {
      console.log('results');
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log('err');
      console.log(err.response.data);
      console.log(err.response.status);
      res.send(err.response.data);
    });
});


module.exports = router;
