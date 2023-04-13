FROM node:16.20-alpine

WORKDIR /src/dev/fastify-app/

COPY . .

RUN npm i yarn
RUN yarn install

CMD ["yarn", "dev"]