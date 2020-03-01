#set default enviroment variables
ENV GITHUB_USERNAME=input_your_username_here
ENV GITHUB_PASSWORD=input_your_password_here
ENV REPO_NAME=input_repo_name
REPO_LINK=github.com/input_username_of_git_repo/${REPO_NAME}.git


FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]