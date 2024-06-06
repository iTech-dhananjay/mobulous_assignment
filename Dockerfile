FROM node:20-alpine

WORKDIR /myapp

COPY . ./

EXPOSE 3007

CMD [ "npm","start" ]

