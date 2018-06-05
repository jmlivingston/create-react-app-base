const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility').getFilesFolders

const buildDir = path.join(__dirname, '../build')
const buildServerDir = path.join(__dirname, '../build-server')

getFilesFolders(buildServerDir, false).forEach(file => {
  fs.copyFileSync(file, file.replace(buildServerDir, buildDir))
})

