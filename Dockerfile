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

#set default enviroment variables
ENV GITHUB_USERNAME=input_your_username_here \
	GITHUB_PASSWORD=input_your_password_here \
	REPO_NAME=input_repo_name \
	REPO_LINK=github.com/input_username_of_git_repo/${REPO_NAME}.git

RUN rm -rf .git .gitignore
RUN git config --global user.email documentation@uploader.bot
RUN git config --global user.name documentation_uploader_bot

CMD [ "npm", "start" ]