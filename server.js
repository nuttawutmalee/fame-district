require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { SERVER_PORT, WEBHOOK_PATH, WEBHOOK_SECRET } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { get } = require('lodash');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Webhook endpoint
// eslint-disable-next-line
app.post(WEBHOOK_PATH, async (req, res) => {
  const secret = get(req, 'body.secret', null);

  if (secret) {
    if (secret !== WEBHOOK_SECRET) {
      return res.sendStatus(401);
    }
  } else if (secret !== null) {
    return res.sendStatus(400);
  }

  const type = get(req, 'body.type', null);

  // ignore everything but api-update
  if (type) {
    if (type !== 'api-update') {
      return res.sendStatus(500);
    }
  } else if (type !== null) {
    return res.sendStatus(400);
  }

  try {
    // eslint-disable-next-line
    console.log('Webhook detected, rebuilding started...');

    const { stdout, stderr } = await exec('npm run deploy');

    if (stdout) {
      // eslint-disable-next-line
      console.log(stdout);
    }

    if (stderr) {
      // eslint-disable-next-line
      console.log(stderr);
    }

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

// eslint-disable-next-line
app.listen(SERVER_PORT, () => console.log(`Webhook app listening on port ${SERVER_PORT}!`));
