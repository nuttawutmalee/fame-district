const AWS = require('aws-sdk');

function runSNS() {
  const codepipeline = new AWS.CodePipeline();

  return codepipeline
    .startPipelineExecution({ name: process.env.CODEPIPELINE_NAME })
    .promise()
    .then((resp) => {
      // eslint-disable-next-line
      console.log('Start pipeline execution id', resp.pipelineExecutionId);
      return Promise.resolve(resp);
    });
}

function handler(event, context, cb) {
  // eslint-disable-next-line
  console.log('Received an event: %o', event);

  runSNS()
    .then(() => {
      cb(null, { message: 'ok' });
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.warn('Failed to execute:', err);
      cb(err);
    });
}

module.exports = {
  handler,
  runSNS,
};
