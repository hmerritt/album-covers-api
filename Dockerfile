FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk update && apk upgrade
RUN apk add --no-cache git

COPY /app /app
RUN git clone https://github.com/hmerritt/album-covers
RUN cd data && node seed-index-dump.js


FROM alpine:latest

WORKDIR /usr/src/app
COPY app ./
COPY --from=build /app/data/seeds/index /usr/src/app/data/seeds/index

EXPOSE 80

COPY bootstrap.sh /bootstrap.sh
CMD ["sh", "/bootstrap.sh"]
