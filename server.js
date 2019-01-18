require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { SERVER_PORT, WEBHOOK_PATH, WEBHOOK_SECRET } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
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
      res.sendStatus(401);
      return;
    }
  } else if (secret !== null) {
    res.sendStatus(400);
    return;
  }

  const type = get(req, 'body.type', null);

  // ignore everything but api-update
  if (type) {
    if (type !== 'api-update') {
      res.sendStatus(200);
      return;
    }
  } else if (type !== null) {
    res.sendStatus(400);
    return;
  }

  // eslint-disable-next-line
  console.log('Webhook detected, rebuilding started...');

  const build = spawn('npm run build', {
    shell: true,
  });

  build.on('exit', () => {
    // eslint-disable-next-line
    console.log('Build succeeded');
  });

  build.on('error', (err) => {
    // eslint-disable-next-line
    console.log(err);
  });

  res.sendStatus(200);
});

// eslint-disable-next-line
app.listen(SERVER_PORT, () => console.log(`Webhook app listening on port ${SERVER_PORT}!`));
