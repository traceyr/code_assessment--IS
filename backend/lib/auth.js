'use strict';

const auth = require('basic-auth');
const compare = require('tsscmp');

const isValid = (name, pass) => {
  let valid = true;
  valid = compare(name, 'test-one') && valid;
  valid = compare(pass, 'test-one') && valid;
  return valid;
};

const basicAuth = (req, res, next) => {
  const creds = auth(req);
  if(creds && isValid(creds.name, creds.pass)) {
    res.send(true);
    return next();
  }

  res.set('WW-Authenticate', 'Basic realm="my website"');
  return res.status(401).send('invalid username or password');
};

module.exports = basicAuth;
