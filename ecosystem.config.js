module.exports = {
  apps: [
    {
      name: 'gatsby-prismic',
      script: './server.js',
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-0-184-237.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/ec2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nuttawutmalee/wink-hotels.git',
      path: '/home/ubuntu/gatsby-prismic',
      'post-deploy': 'yarn install && npm run restart',
    },
  },
};
