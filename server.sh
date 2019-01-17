#!/bin/bash

# Install node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.bashrc
nvm install node

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update

sudo apt-get install -y git 
sudo apt-get install --no-install-recommends -y yarn
sudo apt-get install -y nginx

# Setup nginx
sudo rm /etc/nginx/sites-enabled/default
sudo sh -c "cat > /etc/nginx/sites-available/gatsby" <<\EOF
server {
  listen 80;
  server_name gatsby;
  location / {
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header  Host       $http_host;
    proxy_pass        http://127.0.0.1:3000;
  }
}
EOF

sudo ln -s /etc/nginx/sites-available/gatsby /etc/nginx/sites-enabled/gatsby
sudo service nginx restart
