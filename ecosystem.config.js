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
    staging: {
      user: 'ubuntu',
      host: 'ec2-13-229-85-22.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/ec2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nuttawutmalee/wink-hotels.git',
      path: '/home/gatsby/development',
      'pre-setup': 'server.sh',
      'post-deploy': 'npm install && npm run serve --env dev',
      env: {
        NODE_ENV: 'development',
      },
    },
    production: {
      user: 'ubuntu',
      host: 'ec2-13-229-85-22.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/ec2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nuttawutmalee/wink-hotels.git',
      path: '/home/gatsby/production',
      'pre-setup': 'server.sh',
      'post-deploy': 'npm install && npm run serve --env production',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
