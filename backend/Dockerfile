FROM node:20-alpine

# Installing dependencies for Strapi and Sharp
# Adding python3, make, and g++ for native module compilation
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git python3 make g++ sqlite-dev

WORKDIR /opt/app

COPY package.json package-lock.json ./

# Install dependencies (use npm ci for reliable builds)
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci

COPY . .

# Build the Strapi application
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
