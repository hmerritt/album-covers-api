#!/bin/bash

apk update && apk upgrade
apk add --no-cache git

npm install

cd data/seeds
git clone https://github.com/hmerritt/album-covers

cd ../../
npx knex migrate:up
npx knex seed:run
