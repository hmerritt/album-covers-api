FROM node:12-alpine3.11
WORKDIR /usr/src/app

COPY app ./
COPY app/package.json ./package.json

RUN apk update && apk upgrade
RUN apk add --no-cache git
RUN npm install -g node-pre-gyp@0.14.0
RUN npm install
RUN cd data/seeds && git clone https://github.com/hmerritt/album-covers
RUN npx knex migrate:up
RUN npx knex seed:run
RUN cd data/seeds && rm -r album-covers

EXPOSE 5000
CMD ["node", "index.js"]
