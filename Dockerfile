FROM node:10.13.0-alpine

ADD . /code
WORKDIR /code
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
