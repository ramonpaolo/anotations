FROM node:14.17-alpine

LABEL maintainer "Ramon Paolo Maran"

EXPOSE 3000

WORKDIR /app

COPY /client/package.json /client/yarn.lock ./

RUN yarn install

COPY /client/ .

RUN yarn build

RUN yarn global add serve

# COPY /docker/config/config.sh .

# RUN ./config.sh

# CMD ["yarn", "start"]
CMD ["serve", "-s", "build"]