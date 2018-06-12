const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const reactDocs = require('react-docgen')

const codeDir = path.join(__dirname, '../src/styleGuide/code/components')
const componentsDir = path.join(__dirname, '../src/styleGuide/examples/components')
const componentsCommonDir = path.join(__dirname, '../src/components/Common')
const getFilesFolders = require('./utility.js').getFilesFolders
const styleGuideConfigFile = path.join(__dirname, '../src/strings/styleGuide/styleGuide.en.json')

const prettierConfig = {
  jsxBracketSameLine: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  parser: 'babylon'
}

const buildStyleGuide = () => {
  const rootFolders = getFilesFolders(componentsDir, false, 'folder')

  const getPropTypes = file => {
    const string = fs.readFileSync(file).toString()
    const lines = string.split('\n')
    const line = lines.find(line => line.indexOf('components/Common') !== -1)
    const regex = /\{(.*?)\}/
    const importLine = regex.exec(line)
    const nonReactStrapComponents = ['DatePicker']
    if (importLine !== null) {
      const components = importLine[1].replace(/ /g, '').split(',')
      return components.reduce((componentPropTypes, component) => {
        const componentPath =
          nonReactStrapComponents.indexOf(component) !== -1
            ? path.join(componentsCommonDir, component + '.js')
            : path.join(__dirname, '../node_modules/reactstrap/src/' + component + '.js')
        let props = {}
        try {
          const componentCode = fs.readFileSync(componentPath).toString()
          props = reactDocs.parse(componentCode).props
        } catch (error) {
          console.log(component)
          console.log(error)
        }
        componentPropTypes[component] = props
        return componentPropTypes
      }, {})
    } else {
      return {}
    }
  }

  let styleGuide = rootFolders.reduce((rootObj, rootFolder) => {
    const newFolder = rootFolder.replace(componentsDir, codeDir)
    if (!fs.existsSync(newFolder)) {
      fs.mkdirSync(newFolder)
    }
    return {
      ...rootObj,
      [path.basename(rootFolder)]: {
        children: getFilesFolders(rootFolder, false, 'file').reduce((childrenObj, childFile) => {
          const constName = path.basename(childFile).replace('.js', 'Code')
          let fileString =
            'const ' +
            constName +
            ' = `' +
            fs
              .readFileSync(childFile)
              .toString()
              .replace(/`/g, '\\`') +
            '`\n\nexport default ' +
            constName
          fileString = prettier.format(fileString, prettierConfig)
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

  // TODO: Figure out why prettier complains with this JSON. It is valid.
  // styleGuide = prettier.format(styleGuide, prettierConfig)
  styleGuide = JSON.stringify(styleGuide, null, 2)
  fs.writeFileSync(styleGuideConfigFile, styleGuide)
}

buildStyleGuide()