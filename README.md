# onedrive-to-github-documentation-uploader


## How to setup for Docker
1. Clone Docker image from [Docker hub](https://hub.docker.com/r/tim661811/onedrive-to-github-documentation-uploader)

2. Make shure to change the following enviroment variables to reflect your settings<br/>
`GITHUB_USERNAME=input_your_username_here`<br/>
`GITHUB_PASSWORD=input_your_password_here`<br/>
`REPO_NAME=input_repo_name`<br/>
`REPO_LINK=github.com/input_username_of_git_repo/input_repo_name.git`

3. Map your onedrive directory containing all you documents to `/mnt/hgfs/Onedrive/doc`. This will make shure the docker container is able to see the documents.

This will result in a command like this:<br/>
`docker run -d --name container_name -e GITHUB_USERNAME='input_your_username_here' -e GITHUB_PASSWORD='input_your_password_here' -e REPO_NAME='input_repo_name' -e REPO_LINK='github.com/input_username_of_git_repo/input_repo_name.git' -v '/path/to/documents/on/host:/mnt/hgfs/Onedrive/doc:ro tim661811/onedrive-to-github-documentation-uploader` <br/>
Once executed it will create the container with the specified settings.

__NOTE:__ you may have to run the container twice on the first use

## How to setup without Docker (using npm)
1. Clone repository from [Github](https://github.com/tim661811/onedrive-to-github-documentation-uploader)

2. Run `npm install`

3. Add a _.env_ file with the following content: <br />
`GITHUB_USERNAME=input_your_username_here`<br/>
`GITHUB_PASSWORD=input_your_password_here`<br/>
`REPO_NAME=input_repo_name`<br/>
`REPO_LINK=github.com/input_username_of_git_repo/input_repo_name.git`
Change the text after the '=' signs to reflect you settings.

4. Change the PATH_TO_ONEDRIVE_DOCS variable to the path of the directory containing all your documentation.

You can now run the app using `npm start`

__NOTE:__ you may have to run the app twice on the first use