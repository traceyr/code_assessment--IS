'use strict';

const router = require('express').Router();
const axios = require('axios');
const common = require('../lib/commonRoutes.js');

router.get('/', (req, res, next) => {
  axios.get(`${common.baseUrl}/peek`, {
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : process.env.API_KEY
    }
  })
    .then(results => {
      let resultsArr = [];
      let resultMsg = results.data.message;
      for(let i = 0; i < resultMsg.length; i++) {
        let dateFromResults =  resultMsg[i].data.date;
        console.log(dateFromResults);
        if(resultsArr.some(result => result.date && result.date === dateFromResults)) {
          let event = {
            id: resultMsg[i].name,
            name: resultMsg[i].data.name,
            dateTime: resultMsg[i].data.dateTime,
            duration: resultMsg[i].data.duration,
            brief: resultMsg[i].data.brief
          };
          for(var j = 0; j < resultsArr.length; j++) {
            if(resultsArr[j].date === dateFromResults) resultsArr[j].events.push(event);
          }
        } else {
          let dateEvent = {
            date: resultMsg[i].data.date,
            events: [
              {
                id: resultMsg[i].name,
                name: resultMsg[i].data.name,
                dateTime: resultMsg[i].data.dateTime,
                duration: resultMsg[i].data.duration,
                brief: resultMsg[i].data.brief
              }
            ]
          };
          resultsArr.push(dateEvent);
        }
      }
      res.send(resultsArr);
      return resultsArr;
    })
    .catch(err => {
      console.log(err);
      res.send(err.response.data);
    });
});

module.exports = router;
