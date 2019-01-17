#!/bin/bash

# install node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.bashrc
source ~/.nvm/nvm.sh
nvm install node

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update

sudo apt-get install -y git 
sudo apt-get install --no-install-recommends -y yarn
sudo apt-get install -y nginx

# setup nginx
if [ -f /etc/nginx/sites-enabled/default ]; then
sudo rm /etc/nginx/sites-enabled/default
fi

if [ ! -f /etc/nginx/sites-available/gatsby ]; then
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
fi

sudo service nginx restart

sudo rm -rf /var/www/gatsby
sudo mkdir -p /var/www/gatsby
sudo chmod -R 777 /var/www/gatsby
