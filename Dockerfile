FROM node:16.20-alpine

WORKDIR /src/dev/fastify-app/

COPY package*.json ./
RUN npm i yarn
RUN yarn install

COPY ./controllers ./controllers
COPY ./routes ./routes
COPY ./src ./src
COPY index.js ./

CMD ["yarn", "start"]