const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility.js').getFilesFolders

const componentsDir = path.join(__dirname, '../src/style-guide/examples/components')
const codeDir = path.join(__dirname, '../src/style-guide/code/components')

const styleGuideConfigFile = path.join(__dirname, '../src/strings/styleGuide/styleGuide.en.json')

const rootFolders = getFilesFolders(componentsDir, false, 'folder')

const styleGuide = rootFolders.reduce((rootObj, rootFolder) => {
  const newFolder = rootFolder.replace(componentsDir, codeDir)
  if (!fs.existsSync(newFolder)) {
    fs.mkdirSync(newFolder)
  }
  return {
    ...rootObj,
    [path.basename(rootFolder)]: {
      children: getFilesFolders(rootFolder, false, 'file').reduce((childrenObj, childFile) => {
        const constName = path.basename(childFile).replace('.js', 'Code')
        const fileString =
          'const ' +
          constName +
          ' = `' +
          fs
            .readFileSync(childFile)
            .toString()
            .replace(/`/g, '\\`') +
          '`\n\nexport default ' +
          constName
        fs.writeFileSync(childFile.replace(componentsDir, codeDir).replace('.js', 'Code.js'), fileString)
        return {
          ...childrenObj,
          [path.basename(childFile).replace('.js', '')]: {
            components: []
          }
        }
      }, {})
    }
  }
}, {})

fs.writeFileSync(styleGuideConfigFile, JSON.stringify(styleGuide, null, 2))
