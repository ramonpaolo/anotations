FROM nginx:1.21.5-alpine

EXPOSE 80 443

LABEL maintainer "Ramon Paolo Maran"

# Para botar código, para servir de servidor, ao invés de proxy
# WORKDIR /usr/share/nginx/html

# COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]