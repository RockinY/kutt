FROM node:10.13.0-alpine

LABEL maintainer="bran@corran.cn"

WORKDIR /app

# Only copy package.json and yarn.lock instead of all files
COPY package.json ./
COPY yarn.lock ./

# Do not install devDependencies
RUN yarn install

# Bundle app source
COPY . .

RUN yarn build
CMD ["yarn", "start"]
