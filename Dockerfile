FROM node:24-alpine AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4-alpine AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
RUN echo "ServerName 127.0.0.1" >> /usr/local/apache2/conf/apache2.conf
EXPOSE 80