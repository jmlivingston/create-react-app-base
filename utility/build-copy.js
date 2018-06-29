const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility').getFilesFolders

const buildDir = path.join(__dirname, '../build')
const deployDir = path.join(__dirname, '../deploy/client')

getFilesFolders(deployDir, true, 'file').forEach(file => {
  fs.unlinkSync(file)
})

getFilesFolders(buildDir, true, 'both').forEach(fileFolder => {
  const newLocation = fileFolder.replace(buildDir, deployDir)
  if (fs.lstatSync(fileFolder).isDirectory()) {
    if (!fs.existsSync(newLocation)) {
      fs.mkdirSync(newLocation)
    }
  } else {
    fs.copyFileSync(fileFolder, newLocation)
  }
})