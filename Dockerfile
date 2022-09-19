FROM node:16 AS builder

WORKDIR /react-app

COPY package.json yarn.lock /react-app/

RUN yarn install

COPY . /react-app

RUN yarn build
