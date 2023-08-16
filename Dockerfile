FROM node:18

RUN apt-get update && apt-get install -y 
# \
    # vim \
    # && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# RUN npm install
RUN npm install
# RUN npm install cheerio
# RUN npm install express
# RUN npm i nodemon


# Bundle app source
COPY . .

EXPOSE 8888
# RUN the aplication
# CMD [ "npx", "nodemon index.js" ]
# CMD [ "npm", "run", "index.js" ]
CMD [ "node", "index.js" ]
