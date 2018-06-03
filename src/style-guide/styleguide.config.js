const fs = require('fs')
const path = require('path')

const componentCategories = [
  'Alert',
  'Badge',
  'Breadcrumb',
  'Button',
  'Card',
  'Carousel',
  'Collapse',
  'Color',
  'Dropdown',
  'Fade',
  'Form',
  'Jumbotron',
  'Layout',
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

const sections = componentCategories.map(name => ({
  name,
  components: `./components/${name}/**/[A-Z]*.js`
}))

module.exports = {
  components: './**/*.js',
  pagePerSection: true,
  sections,
  showCode: false,
  // showSidebar: false,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, './wrappers/ComponentWrapper')
    // StyleGuideRenderer: path.join(__dirname, './wrappers/StyleGuideWrapper'),
    // SectionsRenderer: path.join(__dirname, './wrappers/SectionsWrapper')
  },
  title: 'react-base',
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file)
      settings.static = true
      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang
      }
    }
    return props
  }
}
