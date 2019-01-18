require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { SERVER_PORT, WEBHOOK_PATH, WEBHOOK_SECRET } = process.env;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { fork } = require('child_process');
const { get } = require('lodash');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Webhook endpoint
// eslint-disable-next-line
app.post(WEBHOOK_PATH, (req, res) => {
  req.setTimeout(10000);

  const secret = get(req, 'body.secret', null);

  if (secret) {
    if (secret !== WEBHOOK_SECRET) {
      res.status(401).end();
      return;
    }
  } else if (secret !== null) {
    res.status(400).end();
    return;
  }

  const type = get(req, 'body.type', null);

  // ignore everything but api-update
  if (type) {
    if (type !== 'api-update') {
      res.status(200).end();
      return;
    }
  } else if (type !== null) {
    res.status(400).end();
    return;
  }

  // eslint-disable-next-line
  console.log('Webhook detected, rebuilding started...');

  const build = fork(path.resolve(__dirname, './build.js'));

  if (!build) {
    res.status(500).end();
    return;
  }

  res.status(200).end();

  build.send(req.body);
});

// eslint-disable-next-line
app.listen(SERVER_PORT, () => console.log(`Webhook app listening on port ${SERVER_PORT}!`));
