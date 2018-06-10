const acorn = require('./acorn')(require('acorn'))

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
  const rootFolders = getFilesFolders(componentsDir, false, 'folder') // .filter(f => f.indexOf('DatePicker') === -1)

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
        const componentFile = fs.readFileSync(componentPath).toString()
        let props = {}
        try {
          props = reactDocs.parse(componentFile).props
        } catch (error) {
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

  styleGuide = JSON.stringify(styleGuide, null, 2)
  // TODO: Figure out why prettier complains with this JSON. It is valid.
  // styleGuide = prettier.format(styleGuide, prettierConfig)
  fs.writeFileSync(styleGuideConfigFile, styleGuide)
}

const fileName = path.join(__dirname, '../src/components/Common/DatePicker.js')

const getPropTypes = fileName => {
  const fileNameCode = fs.readFileSync(fileName).toString()
  const propInfo = acorn.parse(fileNameCode, {
    sourceType: 'module',
    ecmaVersion: 10,
    plugins: {
      dynamicImport: true,
      importMeta: true,
      bigInt: true,
      optionalCatchBinding: true,
      classFields: true,
      privateMethods: true,
      jsonSuperset: true,
      jsx: true,
      staticClassPropertyInitializer: true
    }
  })

  let propTypesList = propInfo.body.find(b => b.type === 'ClassDeclaration').body.body.find(
    b => b.type === 'ClassProperty' && b.key.name === 'propTypes' // || b.key.name === 'defaultProps')
  )

  if (!propTypesList) {
    propTypesList = propInfo.body.find(b => b.type === 'ExpressionStatement').expression.right
  } else {
    propTypesList = propTypesList.value
  }

  const getPropertyName = propTypeValue => {
    console.log(JSON.stringify(propTypeValue, null, 2))
    return propTypeValue.object
      ? propTypeValue.object.property
        ? propTypeValue.object.property.name
        : propTypeValue.property.name
      : propTypeValue.callee
        ? propTypeValue.callee.property.name
        : propTypeValue.property
          ? propTypeValue.property.name
          : 'custom'
  }

  const getPropTypeName = propTypeValue => {
    let value
    let parameters
    // let computed
    let name = getPropertyName(propTypeValue)
    switch (name) {
      case 'custom':
        parameters = propTypeValue.params.map(p => p.name).join(', ')
        break
      case 'instanceOf':
        value = propTypeValue.arguments[0].name
        break
      case 'oneOf':
        name = 'enum'
        value = propTypeValue.arguments[0].elements.map(a => ({
          value: "'" + a.value + "'"
        }))
        break
      case 'oneOfType':
        name = 'union'
        value = propTypeValue.arguments[0].elements.map(a => ({
          value: getPropTypeName(a)
        }))
        computed = false
        break
      case 'arrayOf':
      case 'objectOf':
        value = propTypeValue.arguments.map(a => getPropTypeName(a))
        break
      case 'shape':
        value = propTypeValue.arguments[0].properties.reduce(
          (acc, p) => ({
            ...acc,
            [p.key.name]: {
              ...getPropTypeName(p.value),
              required: p.value.property ? p.value.property.name === 'isRequired' : false
            }
          }),
          {}
        )
        break
      default:
        break
    }
    return {
      name,
      value,
      parameters
    }
  }

  const test = propTypesList.properties.reduce(
    (acc, p) => ({
      ...acc,
      [p.key.name]: {
        type: getPropTypeName(p.value),
        required: p.value.property ? p.value.property.name === 'isRequired' : false,
        description: ''
        // computed
      }
    }),
    {}
  )

  console.log('----------------------------')
  console.log(JSON.stringify(test, null, 2))
}

getPropTypes(fileName)

// const x = fs.readFileSync(fileName)

// const props = reactDocs.parse(x)

// console.log(JSON.stringify(props.props, null, 2))
