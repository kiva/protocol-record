FROM node:14.15.1-alpine3.12 as node_modules
WORKDIR /tmp/
COPY package.json package-lock.json ./
RUN npm install --production

FROM node:14.15.1-alpine3.12 as dist
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json ./
RUN npm install
COPY src/ src/
RUN npm run build

FROM node:14.15.1-alpine3.12
WORKDIR /www
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
RUN adduser -S app
USER app
CMD ["node", "dist/main.js"]
