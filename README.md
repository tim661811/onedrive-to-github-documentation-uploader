# onedrive-to-github-documentation-uploader


## How to setup
1. Clone repository

2. Run `npm install`

3. Add a _.env_ file with the following content: <br />
`GITHUB_USERNAME=input_your_username_here` <br />
`GITHUB_PASSWORD=input_your_password_here` <br /> <br />
Change username and password to match your github account

4. Open the _auto_upload_documentation.js_ file and change the __REPO_NAME__ and the __input_username_of_git_repo__ part of the __REPO_LINK__ variable. These should reflect the target repository.  <br />
Change the __PATH_TO_ONEDRIVE_DOCS__ variable to the path of the directory containing all your documentation.

## How to run
to start the application use `npm start`
