const fs = require('fs')
const path = require('path')
const reactDocs = require('react-docgen')

const parsePropTypes = require('parse-prop-types')

const getFilesFolders = require('./utility.js').getFilesFolders

const componentsDir = path.join(__dirname, '../src/style-guide/examples/components')
const codeDir = path.join(__dirname, '../src/style-guide/code/components')

const styleGuideConfigFile = path.join(__dirname, '../src/strings/styleGuide/styleGuide.en.json')

const buildStories = () => {
  const rootFolders = getFilesFolders(componentsDir, false, 'folder')

  const getPropTypes = file => {
    const string = fs.readFileSync(file).toString()
    const lines = string.split('\n')
    const line = lines.find(line => line.indexOf('components/Common') !== -1)
    const regex = /\{(.*?)\}/
    const importLine = regex.exec(line)
    if (importLine !== null) {
      const components = importLine[1].replace(/ /g, '').split(',')
      return components.reduce((componentPropTypes, component) => {
        const componentFile = fs
          .readFileSync(path.join(__dirname, '../node_modules/reactstrap/src/' + component + '.js'))
          .toString()
        componentPropTypes[component] = reactDocs.parse(componentFile).props
        return componentPropTypes
      }, {})
    } else {
      return {}
    }
  }

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
              componentPropTypes: getPropTypes(childFile)
            }
          }
        }, {})
      }
    }
  }, {})

  fs.writeFileSync(styleGuideConfigFile, JSON.stringify(styleGuide, null, 2))
}

buildStories()
