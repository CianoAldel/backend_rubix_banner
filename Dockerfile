FROM node:alpine
# ENV FOO=foofoo
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm i nodemon -g  
RUN npm i sequelize -g  
RUN npm i sequelize-auto -g  
RUN yarn
# RUN echo "$FOO"
# RUN sequelize-auto -o "./models" -d $DATABASE_NAME -h $DATABASE_URL -u $DATABASE_USER -p $DATABASE_PORT -x $DATABASE_PASS -e $DATABASE_CONNECTION
# Bundle app source
COPY . .

ENTRYPOINT ["yarn", "start"]