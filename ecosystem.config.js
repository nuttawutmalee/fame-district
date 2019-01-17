module.exports = {
  apps: [
    {
      name: 'gatsby-prismic',
      script: './server.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-169-57-55.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/ec2.pem',
      ref: 'origin/master',
      ssh_options: 'StrictHostKeyChecking=no',
      repo: 'https://github.com/nuttawutmalee/wink-hotels.git',
      path: '/var/www/gatsby/production',
      // 'pre-setup': 'server.sh',
      'post-deploy':
        'yarn install && npx pm2 startOrRestart ecosystem.config.js --env production --update-env && npm run deploy',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
