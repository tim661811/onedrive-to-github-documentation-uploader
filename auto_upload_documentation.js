const { exec } = require('child_process');
require('dotenv').config();

var date = new Date();

//path to the Onedrive directory containing all the documents
//when using a shared folder in VMware it's located in /mnt/hgfs/
const PATH_TO_ONEDRIVE_DOCS = "/mnt/hgfs/Onedrive/doc";

//github credentials and repo information
const USER = process.env.GITHUB_USERNAME;
const PASS = process.env.GITHUB_PASSWORD;

const REPO_NAME = process.env.REPO_NAME;
const REPO_LINK = process.env.REPO_LINK;

//check if all required fields are setup by the user
// if (USER == 'input_your_username_here' ||
//     PASS == 'input_your_password_here' ||
//     REPO_NAME == 'input_repo_name' ||
//     REPO_LINK.indexOf("input_username_of_git_repo") != -1) {

//     console.error("One of the following variables aren't setup: USER, PASS, REPO_NAME, REPO_LINK")
//     process.exit();
// }

//create a directory with the name of the repository (if it doesn't exist)
exec('mkdir -p ' + REPO_NAME, (err, stdout) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout (buffered)
        console.log(`${stdout}`);
    }
});

//setup git tools
const git = require('simple-git/promise')(__dirname + '/' + REPO_NAME);
const remote = `https://${USER}:${PASS}@${REPO_LINK}`;
console.log(`using the following remote link: ${remote}`)
//function which clones the repository if it doesn't exist yet
function initialiseRepo(git) {
    console.log("setting up the git repo: " + REPO_LINK);
    return git.clone(remote, __dirname + '/' + REPO_NAME)
        .then(() => console.log('finished'))
        .catch((err) => console.error('failed: ', err));
}

//main structure which handles the pull (for being up to date), and pushing the new documentation
git.checkIsRepo()
    .then(isRepo => !isRepo && initialiseRepo(git))
    .then(() => git.pull(remote, "master"))
    .catch((err) => console.error('failed: ', err))
    .then(() => exec('mkdir -p ' + REPO_NAME + '/doc && cp -r '+ PATH_TO_ONEDRIVE_DOCS +'/* ' + REPO_NAME + '/doc', (err, stdout) => {
        if (err) {
            //some err occurred
            console.error(err)
        } else {
            // the *entire* stdout (buffered)
            console.log(`${stdout}`);
        }
    }))
    .then(() => git.add('./*'))
    .then(() => git.commit("Documentation commit " + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()))
    .then(() => git.push())