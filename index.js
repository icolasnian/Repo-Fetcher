var data = require('./data.json')
const shell = require('shelljs')
const path = './repos'

// clone ref  ' git clone https://nicolasian@bitbucket.org/avanticomunicacao/vtexio-dimensional-b2b.git '

const allValues = data.values
const baseUrl = 'git clone https://nicolasian@bitbucket.org/'

shell.cd(path)

allValues.map((el,index) => {
    const currentRepoName = el.full_name

    
    shell.exec(baseUrl + currentRepoName)
})




