const fs = require('fs')
const path = require('path')

// type - file, folder, both
const getFilesFolders = (dir, isRecursive = true, type = 'file') =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    let fileFolder = []
    switch (type) {
      case 'file':
        fileFolder = isDirectory ? [] : [name]
        break
      case 'folder':
        fileFolder = isDirectory ? [name] : []
        break
      default:
        fileFolder = [name]
        break
    }
    const fileFolders = isRecursive && isDirectory ? getFilesFolders(name, isRecursive, type) : []
    return [...files, ...fileFolder, ...fileFolders]
  }, [])

module.exports = {
  getFilesFolders
}
