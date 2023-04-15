# Build stage
FROM node:16.20-alpine

WORKDIR /src/dev/fastify-app/

COPY package*.json ./
RUN npm i yarn
RUN yarn install

# Run stage
# FROM tomcat
# COPY --from=build /src/dev/fastify-app/....  /src/dev/fastify-app/....
COPY . .

# with user authority permission setting
# ======================================
# create group and user
# RUN groupadd -r tom && useradd -g tom tom
# set ownership and permissions
# RUN chown -R tom:tom /src/dev/...
# swith to user
# USER tom
# ======================================
# use Docker scan for image scanning

CMD ["yarn", "start"]