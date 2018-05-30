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

const getName = file => {
  return path.basename(file, '.js')
}

const getTitle = (file, component) => {
  let title = path.basename(file, '.js').replace(component, '')
  if (title === '') {
    title = 'Default'
  }
  return title
}

componentCategories.forEach(component => {
  const baseDir = path.join(__dirname, '../src/stories/components', component)
  const files = getAllFiles(baseDir).filter(x => x !== path.join(baseDir, 'index.js'))
  const code = `import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
${files.map(file => `\timport { default as ${getName(file)} } from './${getName(file)}'`).join('\r\n')}

storiesOf('${component}', module)
  .addDecorator(config.wrapper)
  ${files
    .map(file => {
      return `.add('${getTitle(file, component)}', () => <${getName(file)} />)`
    })
    .join('\r\n')}
`

  fs.writeFileSync(path.join(baseDir, 'index.js'), code)
})
