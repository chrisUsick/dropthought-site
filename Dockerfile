FROM kyma/docker-nginx
#COPY ./default /etc/nginx/sites-enabled/default
COPY . /var/www
CMD 'nginx'
