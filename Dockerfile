FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm start

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html
