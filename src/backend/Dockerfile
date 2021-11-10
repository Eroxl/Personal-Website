FROM node:14

WORKDIR /usr/src/

# -=- Install Packages -=-
COPY package*.json ./
RUN yarn

# -=- Copy Source Code -=-
COPY . .

# -=- Expose The Port -=-
EXPOSE 8080

# -=- Build / Run The Code -=-
CMD [ "yarn", "run", "start" ]