'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.get('/', (req, res, next) => {
  axios.get(`${common.baseUrl}/peek`, { headers: common.headers })
    .then(results => {
      console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log(err);
      res.send(err.response.data);
    });
});

module.exports = router;
