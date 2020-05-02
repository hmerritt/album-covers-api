#!/bin/bash

echo -e "\n* Install required programs"
apk update && apk upgrade
apk add --update nodejs npm
apk add --no-cache git make gcc g++ python3

echo -e "\n* Install node modules"
cd /usr/src/app
npm install -g node-pre-gyp
npm install

echo -e "\n\n* Fetch album-covers"
cd data/seeds
git clone https://github.com/hmerritt/album-covers

echo -e "\n\n* Generate index and populate database"
npx knex migrate:up
npx knex seed:run
rm -r ./album-covers

echo -e "\n\n* Remove redundant programs"
apk del git make gcc g++ python3

echo -e "\n\n* Start API server"
cd /usr/src/app
node index.js
