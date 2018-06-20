const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility').getFilesFolders

const renameSassFiles = () => {
  const sassFiles = getFilesFolders(path.join(__dirname, '../src/styles'))

  sassFiles.forEach(file => {
    if (file.includes('.scss')) {
      fs.rename(file, file.replace('_', ''))
    }
  })
}
