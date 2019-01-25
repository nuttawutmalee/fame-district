const AWS = require('aws-sdk-mock');
const build = require('./build');

beforeEach(() => {
  AWS.mock('CodePipeline', 'startPipelineExecution', (params, cb) => {
    cb(null, { pipelineExecutionId: 'test' });
  });
  process.env.CODEPIPELINE_NAME = 'TEST_PRISMIC_WEBHOOK';
});

afterEach(() => {
  AWS.restore();
  process.env.CODEPIPELINE_NAME = null;
});

test('invokes callback', (done) => {
  build.handler({}, {}, (err) => {
    if (err) {
      done.fail(err);
    } else {
      done();
    }
  });
});

test('handle run SNS', () => {
  return build.runSNS();
});

test('start codepipeline execution', (done) => {
  AWS.restore('CodePipeline', 'startPipelineExecution');
  AWS.mock('CodePipeline', 'startPipelineExecution', (params) => {
    expect(params).toHaveProperty('name', process.env.CODEPIPELINE_NAME);
    done();
  });

  build.runSNS();
});
