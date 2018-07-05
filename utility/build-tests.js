// Simple utility for creating basic tests where they don't exist

const fs = require('fs')
const path = require('path')

const getFilesFolders = require('./utility-io').getFilesFolders

const fileFilter = file => file.includes('.js') && !file.includes('index.js') && !file.includes('.test.js')

const getTest = name => {
  return `import 'polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import ${name} from './${name}'

it('${name} - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<${name} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
`
}

const dirPaths = [
  { path: path.join(__dirname, '../packages/app/src/components'), isRecursive: true },
  { path: path.join(__dirname, '../packages/components/src/components'), isRecursive: true },
  { path: path.join(__dirname, '../packages/style-guide/src/components/Global'), isRecursive: true },
  { path: path.join(__dirname, '../packages/style-guide/src/components/StyleGuide'), isRecursive: false },
  { path: path.join(__dirname, '../packages/style-guide/src/components/StyleGuide/examples'), isRecursive: true }
]

dirPaths.forEach(dirPath => {
  const dirName = path.join(__dirname, dirPath.path)
  const files = getFilesFolders(dirName.isRecursive).filter(fileFilter)
  files.forEach(file => {
    const baseName = path.basename(file)
    if (!fs.existsSync(file.replace('.js', '.test.js'))) {
      const test = getTest(baseName.replace('.js', ''))
      fs.writeFileSync(file.replace('.js', '.test.js'), test, 'utf8', err => {
        if (err) {
          console.log(err) // eslint-disable-line no-console
        }
      })
    }
  })
})
