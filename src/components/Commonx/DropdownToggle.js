import { DropdownToggle as ReactStrapDropdownToggle } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const DropdownToggle = props => {
  return (
    <ThemeImporter>
      <ReactStrapDropdownToggle {...props}>{props.children}</ReactStrapDropdownToggle>
    </ThemeImporter>
  )
}

DropdownToggle.propTypes = ReactStrapDropdownToggle.propTypes

export default DropdownToggle
