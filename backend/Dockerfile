# Build Stage
FROM node:20-bookworm-slim AS build

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    python3 \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

COPY package.json package-lock.json ./

# Install dependencies and force native modules to compile from source
RUN npm config set fetch-retry-maxtimeout 600000 -g && \
    npm ci --build-from-source

COPY . .

RUN npm run build

# Runtime Stage
FROM node:20-bookworm-slim

# Install runtime dependencies (libvips is needed by sharp)
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

# Copy the built application and compiled node_modules
COPY --from=build /opt/app ./

EXPOSE 1337

CMD ["npm", "run", "start"]
