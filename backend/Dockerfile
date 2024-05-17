FROM node:17-alpine

WORKDIR /app

RUN npm install

COPY package.json ./
COPY package-lock.json ./
COPY .. .

EXPOSE 5000

CMD ["nodemon","server.js"]




