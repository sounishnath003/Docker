FROM --platform=arm64 node:16
WORKDIR /app
COPY . .
RUN ["npm", "ci"]
ENTRYPOINT [ "npm", "start" ]