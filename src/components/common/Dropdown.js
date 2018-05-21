import { Dropdown as ReactStrapDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Dropdown = props => {
  return (
    <ThemeImporter path="_dropdown">
      <ReactStrapDropdown {...props}>{props.children}</ReactStrapDropdown>
    </ThemeImporter>
  )
}

Dropdown.propTypes = ReactStrapDropdown.propTypes

export default Dropdown
