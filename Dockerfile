FROM node:10-alpine3.11
WORKDIR /usr/src/app

COPY app ./
COPY app/package.json ./package.json

RUN apk update && apk upgrade
RUN apk add --no-cache git make gcc g++ python3
RUN npm install -g node-pre-gyp
RUN npm install
RUN cd data/seeds && \
    git clone https://github.com/hmerritt/album-covers && \
	npx knex migrate:up && \
	npx knex seed:run && \
	rm -r ./album-covers
RUN apk del git make gcc g++ python3

EXPOSE 5000
CMD ["node", "index.js"]
