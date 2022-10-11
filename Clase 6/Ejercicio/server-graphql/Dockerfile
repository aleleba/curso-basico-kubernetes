FROM aleleba/ubuntu:4.0.0 as dev-builder

#docker build --target dev-builder -t aleleba/app:dev .
#docker run --name mongodb --rm -p 27017:27017 -e MONGODB_USER=root -e MONGODB_PASS=1234 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=1234 -d mongo:5.0.12

RUN sudo apt-get update

COPY ["./package.json", "./package-lock.json", "/app/"]

WORKDIR /app

RUN npm install --legacy-peer-deps

RUN npm audit fix --legacy-peer-deps

COPY [".", "/app/"]

EXPOSE 80

CMD ["/bin/bash"]

#CURRENT_DIR=$(pwd) && docker run -it -d --rm --name app -p 80:80 -v "$CURRENT_DIR":/app aleleba/app:dev

FROM aleleba/ubuntu:4.0.0 as pre-prod-builder

RUN sudo apt-get update

COPY --from=dev-builder ["/app/", "/app/"]

RUN sudo rm -rf /app/.env

WORKDIR /app

RUN npm run build

FROM aleleba/ubuntu:4.0.0 as prod-builder

#docker build -t aleleba/ro-ut:tag .

RUN sudo apt-get update

WORKDIR /app

COPY --from=pre-prod-builder ["/app/package.json", "/app/package-lock.json", "/app/"]

COPY --from=pre-prod-builder ["/app/node_modules/", "/app/node_modules/"]

COPY --from=pre-prod-builder ["/app/build/", "/app/build/"]

EXPOSE 80

#docker run -it -d --rm -p 4000:4000 -e WHITELIST_URLS=http://localhost:4000 -e PLAYGROUND_GRAPHQL=true -e HOST_MONGO=localhost -e PORT_MONGO=27017 -e DB_MONGO=app_db -e USER_MONGO=root -e PASSWORD_MONGO=1234 --name app  aleleba/example-app:2.0.1

CMD ["npm", "start"]