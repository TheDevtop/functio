FROM node:26-alpine
RUN mkdir -p /opt/fnio /data/store /data/mods
WORKDIR /opt/fnio
COPY . /opt/fnio
RUN npm ci
EXPOSE 8069

# Put default values here
ENV PORT=8069
ENV DATA_DIR=/data/store
ENV MODS_DIR=/data/mods
ENV RESTART=true

CMD [ "npm", "start" ]
LABEL org.opencontainers.image.source="https://github.com/TheDevtop/functio"