const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const codeDir = path.join(__dirname, '../src/style-guide/code/components')
const componentsCommonDir = path.join(__dirname, '../src/components/Common')
const componentsDir = path.join(__dirname, '../src/style-guide/examples/components')
const getFilesFolders = require('./utility.js').getFilesFolders
const styleGuideImportComponentFile = path.join(__dirname, '../src/style-guide/styleGuideData.js')

const prettierConfig = {
  jsxBracketSameLine: true,
  printWidth: 120,
  semi: false,
  singleQuote: true
}

const buildStyleGuide = () => {
  const rootFolders = getFilesFolders(componentsDir, false, 'folder')

  const getComponents = file => {
    const string = fs.readFileSync(file).toString()
    const lines = string.split('\n')
    const line = lines.find(line => line.indexOf('components/Common') !== -1)
    const regex = /\{(.*?)\}/
    const importLine = regex.exec(line)
    return importLine ? importLine[1].replace(/ /g, '').split(',') : []
  }

  let code = rootFolders.reduce((rootObj, rootFolder) => {
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
              components: getComponents(childFile)
            }
          }
        }, {})
      }
    }
  }, {})
  code = 'const styleGuideData = ' + JSON.stringify(code)

  const files = getFilesFolders(componentsCommonDir, false, 'file').filter(file => file.indexOf('index.js') === -1)
  code += `\r\nconst importComponentByName = async name => {
    let component
    switch (name) {
      ${files
        .map(file => {
          const baseName = path.basename(file).replace('.js', '')
          return `case '${baseName}':
      component = await import('components/Common/${baseName}')
      break`
        })
        .join('\n')}
      default:
        break
    }
    return component
  }

  export { importComponentByName, styleGuideData }`
  code = prettier.format(code, prettierConfig)
  console.log(code)
  fs.writeFileSync(styleGuideImportComponentFile, code)
}

buildStyleGuide()
