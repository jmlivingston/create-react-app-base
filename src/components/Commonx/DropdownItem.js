import { DropdownItem as ReactStrapDropdownItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const DropdownItem = props => {
  return (
    <ThemeImporter>
      <ReactStrapDropdownItem {...props}>{props.children}</ReactStrapDropdownItem>
    </ThemeImporter>
  )
}

DropdownItem.propTypes = ReactStrapDropdownItem.propTypes

export default DropdownItem
