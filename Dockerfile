FROM node:16-slim

WORKDIR /code

COPY package.json package-lock.json ./

RUN npm install

USER node