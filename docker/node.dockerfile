FROM node:14.17-alpine

LABEL maintainer "Ramon Paolo Maran"

EXPOSE 3000

WORKDIR /app

COPY /server/package.json /server/yarn.lock ./

RUN yarn install

COPY /server .

RUN yarn run build

CMD [ "node", "./dist/routes.js" ]