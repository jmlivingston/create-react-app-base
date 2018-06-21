const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility').getFilesFolders

const buildDir = path.join(__dirname, '../build')
const deployDir = path.join(__dirname, '../deploy/client')

getFilesFolders(buildDir, false).forEach(file => {
  fs.copyFileSync(file, file.replace(buildDir, deployDir))
})
