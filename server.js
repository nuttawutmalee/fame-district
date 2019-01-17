require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { SERVER_PORT, WEBHOOK_PATH, WEBHOOK_SECRET, NODE_ENV } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const validateWebhook = (req, res, next) => {
  const { body = null } = req;

  if (!body) return next('Empty body');

  const { type, secret } = body;

  if (secret !== WEBHOOK_SECRET) {
    return next('Unauthorized');
  }

  if (type !== 'api-update') {
    // ignore everything but api-update
    return res.status(200).end();
  }

  return next();
};

// Webhook endpoint
app.post(WEBHOOK_PATH, validateWebhook, async (req, res) => {
  try {
    const cmd = NODE_ENV === 'production' ? 'npm run deploy-prod' : 'npm run deploy-dev';
    const { stdout, stderr } = await exec(cmd);

    if (stdout) {
      // eslint-disable-next-line
      console.log(stdout);
    }

    if (stderr) {
      // eslint-disable-next-line
      console.log(stderr);
    }

    // eslint-disable-next-line
    console.log('Webhook detected, rebuilding started...');

    // deploy to s3

    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
});

// eslint-disable-next-line
app.listen(SERVER_PORT, () => console.log(`Webhook app listening on port ${SERVER_PORT}!`));
