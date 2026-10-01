FROM node:23-slim

WORKDIR /app

COPY package.json .

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]