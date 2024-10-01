FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./app

RUN npm ci 

COPY . .

CMD ["npm", "start"]