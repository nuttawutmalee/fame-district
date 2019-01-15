require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { PRISMIC_WEBHOOK_PATH, PRISMIC_WEBHOOK_SECRET, NODE_ENV } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const webhookValidator = (req, res, next) => {
  const { body = null } = req;

  if (!body) return next('Empty body');

  const { type, secret } = body;

  if (type !== 'api-update' || secret !== PRISMIC_WEBHOOK_SECRET) {
    return next('Webhook unauthorized');
  }

  return next();
};

// Webhook endpoint
app.post(PRISMIC_WEBHOOK_PATH, webhookValidator, async (req, res) => {
  try {
    const { stdout, stderr } = await exec(`npm run build ${NODE_ENV}`);

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

    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
});

// eslint-disable-next-line
app.listen(3000, () => console.log(`Webhook app listening on port ${port}!`));
