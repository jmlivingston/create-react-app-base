// Simple utility for creating basic tests where they don't exist

const fs = require('fs')
const path = require('path')

const fileFilter = file => file.includes('.js') && !file.includes('index.js') && !file.includes('.test.js')
const getFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    return fs.statSync(path.join(dir, file)).isDirectory()
      ? files.concat(getFiles(path.join(dir, file))).filter(fileFilter)
      : files.concat(path.join(dir, file)).filter(fileFilter)
  }, [])

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

const dirPaths = ['../src/components']

dirPaths.forEach(dirPath => {
  const dirName = path.join(__dirname, dirPath)
  const files = getFiles(dirName)
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
