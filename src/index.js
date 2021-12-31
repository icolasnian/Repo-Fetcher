// json generated from bash fetch-repos
var data = require('./resources/data.json')

// shelljs
const shell = require('shelljs')

// desired path to save cloned repos
const path = './repos'

// get all values from data.json
const allValues = data.values

// baseurl url to clone command, {USERNAME} = your bitbucket / git username
// change @bitbucket according to your needs

const baseUrl = 'git clone https://{USERNAME}@bitbucket.org/'

// cd to repos folder and start cloning
shell.cd(path)

// go through each value inside data.json and execute clone command
allValues.map((el,index) => {
    const currentRepoName = el.full_name
    shell.exec(baseUrl + currentRepoName)
})




