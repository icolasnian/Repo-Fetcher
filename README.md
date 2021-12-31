# Repo-Fetcher
Fetch all repos inside git workspace

## Description
This is a script very useful to clone multiple repos automatically.

## Usage
Inside resources/fetch-repos, you need to set your credentials, those being username / app password (bitbucket) and desired workspace.
Then run bash fetch-repos inside resources folder, if its successfull data.json will be populated with fetch results.
After that, cd to /src and change your username inside index.js baseUrl variable.
Now its all ready, just run node index.js on terminal and all repos will be cloned :)

