'use strict';

module.exports = {
  baseUrl: 'https://crud-api.azurewebsites.net/api',
  headers: {
    'Content-Type' : 'application/json',
    'X-API-KEY' : process.env.API_KEY
  }
};
