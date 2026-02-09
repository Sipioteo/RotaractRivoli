FROM node:22-alpine

# Installing dependencies for Strapi and Sharp
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

WORKDIR /opt/app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

COPY . .

# Build the Strapi application
ENV NODE_ENV=production
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
