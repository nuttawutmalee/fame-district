const { spawn } = require('child_process');

// eslint-disable-next-line
process.on('message', body => {
  // eslint-disable-next-line
  console.log('Webhook detected, rebuilding started...');

  const build = spawn('gatsby build', { shell: true });

  build.stdout.on('data', (data) => {
    // eslint-disable-next-line
    console.log(`stdout: ${data}`);
  });

  build.stderr.on('data', (data) => {
    // eslint-disable-next-line
    console.log(`stderr: ${data}`);
  });

  build.on('close', (code) => {
    if (code !== 0) {
      // eslint-disable-next-line
      console.log(`build process exited with code ${code}`);
    }
  });
});
