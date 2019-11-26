# Start from ubuntu
FROM ubuntu:19.10

ARG APP_DIR
ARG NODE_VERSION

RUN apt-get update \
    && apt-get -y install \
        apt-utils \
        curl \
    &&  apt-get clean

# Install n with node and npm
RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n \
    && bash n $NODE_VERSION

# Set the working directory
WORKDIR $APP_DIR

# Install app dependencies
COPY ./package*.json ./
RUN npm install

# Bundle app source
COPY . .

RUN chmod -R 777 /var

EXPOSE 8080
CMD ["npm", "run", "dev"]
