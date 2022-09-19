FROM node:16 AS builder

WORKDIR /react-app

COPY package.json .
RUN yarn install
RUN yarn add react-scripts@3.4.1

COPY . .

RUN yarn build
