FROM node:16

WORKDIR /service

COPY package*.json ./

RUN npm install -g npm@latest
RUN npm i core-util-is

RUN npm install

COPY . /service
RUN chmod +x bootstrap.sh

# bootstarp the application
ENTRYPOINT ["/service/bootstrap.sh"]

# exposing the required ports
EXPOSE 8005
