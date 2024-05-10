FROM node:20-alpine

WORKDIR /src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]

