'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.delete('/', (req, res, next) => {
  let rowKey = '123';
  axios.delete(`${common.baseUrl}/remove/${rowKey}`, { headers: common.headers })
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
