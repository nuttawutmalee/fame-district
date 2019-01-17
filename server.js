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

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Webhook endpoint
app.post(WEBHOOK_PATH, async (req, res) => {
  const { body = null } = req;

  if (!body) return res.status(500).json('Empty body');

  const { type, secret } = body;

  if (secret !== WEBHOOK_SECRET) {
    return res.status(500).json('Unauthorized');
  }

  if (type !== 'api-update') {
    // ignore everything but api-update
    return res.status(200).end();
  }

  try {
    const { stdout, stderr } = await exec('npm run deploy');

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

    return res.status(200).end();
  } catch (e) {
    return res.status(500).end();
  }
});

// eslint-disable-next-line
app.listen(SERVER_PORT, () => console.log(`Webhook app listening on port ${SERVER_PORT}!`));
