FROM node:16 AS builder

WORKDIR /react-app

COPY package.json .
RUN yarn install

COPY . .

RUN yarn build
