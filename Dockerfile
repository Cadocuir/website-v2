FROM node:20-alpine

WORKDIR /app
COPY . .
RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN rm -rf .npmrc

ENV BODY_SIZE_LIMIT=Infinity

RUN apk add --no-cache libc6-compat
RUN apk update
RUN apk add chromium
ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    && npm install puppeteer

RUN npm install
RUN npx prisma migrate deploy
RUN npx prisma generate
RUN pnpm run build

ENTRYPOINT node server.js