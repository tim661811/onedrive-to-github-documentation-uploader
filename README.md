# onedrive-to-github-documentation-uploader


## How to setup
1. Clone Docker image

2. Make shure to change the following enviroment variables (change the bold sections only) to reflect your settings<br/>
GITHUB_USERNAME=__input_your_username_here__<br/>
GITHUB_PASSWORD=__input_your_password_here__<br/>
REPO_NAME=__input_repo_name__<br/>
REPO_LINK=github.com/__input_username_of_git_repo__/__input_repo_name__.git

3. Map your onedrive directory containing all you documents to `/mnt/hgfs/Onedrive/doc`. This will make shure the docker container is able to see the documents.

NOTE: you may have to run the container twice on the first use
