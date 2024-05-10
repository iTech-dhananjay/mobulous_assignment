FROM node:20-alpine

WORKDIR /src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm","start"]

