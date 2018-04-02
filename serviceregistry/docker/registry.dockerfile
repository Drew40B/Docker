FROM node

ADD "./out/*" "/app/"
WORKDIR /app

COPY package*.json ./

RUN npm install

