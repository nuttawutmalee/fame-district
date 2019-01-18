const { spawnSync } = require('child_process');

process.on('message', () => {
  // eslint-disable-next-line
  console.log('Webhook detected, rebuilding started...');

  const { stdout, stderr } = spawnSync('npm run build', { shell: true });

  if (stdout) {
    // eslint-disable-next-line
    console.log(stdout);
  }

  if (stderr) {
    // eslint-disable-next-line
    console.log(stderr);
  }
});
