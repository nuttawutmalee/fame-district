const aws = require('aws-sdk');

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
  const sns = new aws.SNS();
  const params = {
    Message: JSON.stringify(msg),
    TopicArn: null,
  };

  return sns
    .createTopic({ Name: 'PRISMIC_LAMBDA_WEBHOOK' })
    .promise()
    .then((resp) => {
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

function handle(event, context, cb) {
  return getBody(event)
    .then((body) => {
      return runWebhook(body);
    })
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
    .catch(() => {
      cb(null, {
        statusCode: 400,
        body: 'Failure in request or in handler',
      });
    });
}

module.exports = {
  handle,
  runWebhook,
};
