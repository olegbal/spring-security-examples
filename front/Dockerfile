# pull official base image
FROM node:lts-alpine3.16

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install -g env-cmd --silent
RUN npm install -g serve --silent
# add app
COPY . ./

RUN npm run build:develop
RUN npm run build:production

CMD ["serve", "-s", "./build-dev"]