FROM node:12-alpine3.11
WORKDIR /usr/src/app

COPY /app ./
COPY bootstap.sh ./
CMD ["sh", "bootstap.sh"]

EXPOSE 80
CMD ["node", "index.js"]
