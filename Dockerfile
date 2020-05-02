FROM alpine:latest

WORKDIR /usr/src/app
COPY app ./

EXPOSE 80

COPY bootstrap.sh /bootstrap.sh
CMD ["sh", "/bootstrap.sh"]
