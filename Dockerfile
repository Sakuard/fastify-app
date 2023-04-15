FROM node:16.20-alpine

WORKDIR /src/dev/fastify-app/

COPY . .

RUN npm i yarn
RUN yarn install

EXPOSE 5000:5000

CMD ["yarn", "start"]