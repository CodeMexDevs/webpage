FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY package.json package-lock.json ./
COPY server.js ./
RUN npm install --only=prod

ENV PORT=8080

EXPOSE 8080

# Ejecutar la aplicación con Express
CMD ["node", "server.js"]
