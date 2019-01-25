const AWS = require('aws-sdk');

function getBody(event) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(event.body));
    } catch (err) {
      reject(err);
    }
  });
}

function sendNotification(msg) {
  const sns = new AWS.SNS();
  const params = {
    Message: JSON.stringify(msg),
    TopicArn: null,
  };

  return sns
    .createTopic({ Name: process.env.TOPIC_NAME })
    .promise()
    .then((resp) => {
      // eslint-disable-next-line
      console.log('Sending SNS message to', resp.TopicArn);

      params.TopicArn = resp.TopicArn;
      return sns.publish(params).promise();
    });
}

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

  return getBody(event)
    .then(body => runWebhook(body))
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
