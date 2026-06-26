FROM node:26-alpine
RUN mkdir -p /opt/fnio
WORKDIR /opt/fnio
COPY . /opt/fnio
RUN npm ci
EXPOSE 3000
CMD [ "npm", "start" ]
