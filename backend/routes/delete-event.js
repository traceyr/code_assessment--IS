'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.delete('/:rowKey', (req, res, next) => {
  axios.delete(`${common.baseUrl}/remove/${req.params.rowKey}`, {
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : process.env.API_KEY
    }
  })
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.send(err.response.data);
    });
});


module.exports = router;
