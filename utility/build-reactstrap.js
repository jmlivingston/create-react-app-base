const fs = require('fs-extra')
const getAllFiles = require('./utility').getAllFiles
const path = require('path')
const rimraf = require('rimraf')
const argv = require('yargs').argv

const reactStrapBasePath = path.join(__dirname, '../../reactstrap')
const storyComponentsPath = path.join(__dirname, '../src/stories/components')
const componentNames = [
  'Alert',
  'Badge',
  'Breadcrumb',
  'BreadcrumbItem',
  'Button',
  'ButtonDropdown',
  'ButtonGroup',
  'ButtonToolbar',
  'Card',
  'CardBody',
  'CardColumns',
  'CardDeck',
  'CardFooter',
  'CardGroup',
  'CardHeader',
  'CardImg',
  'CardImgOverlay',
  'CardLink',
  'CardSubtitle',
  'CardText',
  'CardTitle',
  'Carousel',
  'CarouselCaption',
  'CarouselControl',
  'CarouselIndicators',
  'CarouselItem',
  'Col',
  'Collapse',
  'Container',
  'CustomInput',
  'Dropdown',
  'DropdownItem',
  'DropdownMenu',
  'DropdownToggle',
  'Fade',
  'Form',
  'FormFeedback',
  'FormGroup',
  'FormText',
  'Input',
  'InputGroup',
  'InputGroupAddon',
  'InputGroupButtonDropdown',
  'InputGroupText',
  'Jumbotron',
  'Label',
  'ListGroup',
  'ListGroupItem',
  'ListGroupItemHeading',
  'ListGroupItemText',
  'Media',
  'Modal',
  'ModalBody',
  'ModalFooter',
  'ModalHeader',
  'Nav',
  'Navbar',
  'NavbarBrand',
  'NavbarToggler',
  'NavItem',
  'NavLink',
  'Pagination',
  'PaginationItem',
  'PaginationLink',
  'Popover',
  'PopoverBody',
  'PopoverHeader',
  'Progress',
  'Row',
  'TabContent',
  'Table',
  'TabPane',
  'Tooltip',
  'UncontrolledAlert',
  'UncontrolledButtonDropdown',
  'UncontrolledCarousel',
  'UncontrolledDropdown',
  'UncontrolledTooltip'
]

const componentCategories = [
  'Alert',
  'Badge',
  'Breadcrumb',
  'Button',
  'Card',
  'Carousel',
  'Col',
  'Collapse',
  'Container',
  'CustomInput',
  'Dropdown',
  'Fade',
  'Form',
  'Input',
  'Jumbotron',
  'Label',
  'ListGroup',
  'Media',
  'Modal',
  'Nav',
  'Pagination',
  'Popover',
  'Progress',
  'Row',
  'TabContent',
  'Table',
  'TabPane',
  'Tooltip'
]

if (fs.existsSync(reactStrapBasePath)) {
  // Copy pages and examples from reactstrap
  /// rimraf.sync(path.join(__dirname, '../src/reactstrap'))

  // For moving into categories. Not very accurate so only doing once then commenting out. Further work all manual
  // rimraf.sync(storyComponentsPath)
  // fs.mkdirSync(storyComponentsPath)

  // componentCategories.forEach(category => {
  //   fs.mkdirSync(path.join(storyComponentsPath, category))
  // })

  // getAllFiles(path.join(reactStrapBasePath, 'docs/lib/examples')).forEach(file => {
  //   let categoryFound = false
  //   for(componentCategory of componentCategories) {      
  //     if(file.includes(componentCategory)) {
  //       fs.copyFile(file, path.join(storyComponentsPath, category, path.basename(file)))
  //       categoryFound = true
  //       break
  //     }
  //   }
  //   if(!categoryFound) {
  //     console.log(file)
  //   }
  // })

  // fs.copySync(path.join(reactStrapBasePath, 'docs/lib/examples'), path.join(__dirname, '../src/stories/components'))

  componentNames.forEach(component => {
    const code = `import { ${component} as ReactStrap${component} } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ${component} = props => {
  return (
    <Fragment>
      <ThemeImporter path="_${component.toLowerCase()}">
        <ReactStrap${component} {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

${component}.propTypes = ReactStrap${component}.propTypes

export default ${component}
`
    fs.writeFileSync(path.join(__dirname, '../src/components/common/' + component + '.js'), code)
  })

  // Copy over examples into stories but create reference to wrapped versions
  getAllFiles(path.join(__dirname, '../src/stories/components')).forEach(file => {
    const lines = fs
      .readFileSync(file)
      .toString()
      .split('\n')
      .map(line => {
        if (line.includes("'reactstrap'")) {
          line = line.replace('reactstrap', '../../../components/common')
        }
        return line
      })
    fs.writeFileSync(file, lines.join('\n'))
  })

  // Create copy of all examples using .txt extension (for use with raw-loader in create-react-app)
  // getAllFiles(path.join(__dirname, '../src/reactstrap/lib/examples')).forEach(file => {
  //   const fileString = fs.readFileSync(file).toString()
  //   fs.writeFile(file.replace('.js', '.txt'), fileString)
  // })

  // Update pages to reference .txt above
  // getAllFiles(path.join(__dirname, '../src/reactstrap')).forEach(file => {
  //   const lines = fs
  //     .readFileSync(file)
  //     .toString()
  //     .split('\n')
  //     .map(line => {
  //       if (line.includes('!!raw!')) {
  //         line = line
  //           .replace('const', 'import')
  //           .replace('!!raw!', '')
  //           .replace("');", ".txt';")
  //           .replace('= require(', 'from ')
  //       }
  //       return line
  //     })
  //   fs.writeFileSync(file, lines.join('\n'))
  // })

  // update routes based on pages
} else {
  console.log('reactstrap must be cloned as a sibling of this project')
}

console.log(reactStrapBasePath)
