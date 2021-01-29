FROM node:10-alpine AS BUILD_IMAGE

WORKDIR '/app'

COPY package.json

RUN npm install

COPY ..

CMD ["npm","start"]