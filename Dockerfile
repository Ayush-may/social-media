#FROM node:18-alpine
FROM alpine
RUN apk add --update nodejs npm

WORKDIR /app
COPY public/ ./public
COPY src/ ./src
COPY package*.json ./

RUN npm install

COPY . ./

#EXPOSE 5173

#CMD npm run dev