const AWS = require('aws-sdk');

/**
 * Parse Lambda event object.
 * @param {object} event Lambda event object.
 */
function getBody(event) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(event.body));
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Create SNS topic to subscribers.
 * @param {object} msg Request body from REST api endpoint
 *                     This is basically Prismic webhook's body.
 * @see https://user-guides.prismic.io/webhooks/webhooks
 */
function sendNotification(msg) {
  const sns = process.env.IS_OFFLINE
    ? new AWS.SNS({ endpoint: 'http://127.0.0.1:4002' })
    : new AWS.SNS();

  const params = {
    Message: JSON.stringify(msg),
    TopicArn: null,
  };

  return sns
    .createTopic({ Name: process.env.SNS_TOPIC_NAME })
    .promise()
    .then((resp) => {
      // eslint-disable-next-line
      console.log('Sending SNS message to', resp.TopicArn);

      params.TopicArn = resp.TopicArn;
      return sns.publish(params).promise();
    });
}

/**
 * Validate Prismic webhook's body.
 * - Check matched secret token
 * - Ignore every api type except 'api-update'
 *
 * @param {object} data Request body from REST api endpoint
 *                      This is basically Prismic webhook's body.
 * @see https://user-guides.prismic.io/webhooks/webhooks
 */
function runWebhook(data) {
  const incomingSecret = data.secret;
  const serviceSecret = process.env.PRISMIC_WEBHOOK_SECRET;

  if (!incomingSecret || !serviceSecret || incomingSecret !== serviceSecret) {
    return Promise.reject(new Error('Permission denied'));
  }

  if (data.type !== 'api-update') {
    return Promise.resolve();
  }

  return sendNotification(data);
}

function handler(event, context, cb) {
  // eslint-disable-next-line
  console.log('Running webhook handler');

  getBody(event)
    .then(runWebhook)
    .then(() => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: 'ok' }),
      };
      cb(null, response);
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.warn('Handling event failed:', err);

      cb(null, {
        statusCode: 400,
        body: 'Failure in request or in handler',
      });
    });
}

module.exports = {
  handler,
  runWebhook,
};
