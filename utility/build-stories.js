const fs = require('fs-extra')
const getAllFiles = require('./utility').getAllFiles
const path = require('path')
const rimraf = require('rimraf')
const argv = require('yargs').argv

const storyComponentsPath = path.join(__dirname, '../src/stories/components')

const componentCategories = [
  'Alert',
  'Badge',
  'Breadcrumb',
  'Button',
  'Card',
  'Carousel',
  'Collapse',
  'Dropdown',
  'Fade',
  'Form',
  'Input',
  'Jumbotron',
  'Label',
  'ListGroup',
  'Media',
  'Misc',
  'Modal',
  'Nav',
  'Pagination',
  'Popover',
  'Progress',
  'Table',
  'Tabs',
  'Tooltip'
]

componentCategories.forEach(component => {
  getAllFiles(path.join(__dirname, '../src/stories/components')).forEach(file => {
    const lines = fs
      .readFileSync(file)
      .toString()
      .split('\n')
      .map(line => {
        if (line.includes("'reactstrap'")) {
          line = line.replace('reactstrap', 'components/common')
        }
        return line
      })
    fs.writeFileSync(file, lines.join('\n'))
  })
})

console.log(reactStrapBasePath)
