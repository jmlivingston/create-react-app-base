import { Dropdown as ReactStrapDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Dropdown = props => {
  return (
    <ThemeImporter sassNames={['_dropdown', '_buttons']}>
      <ReactStrapDropdown {...props}>{props.children}</ReactStrapDropdown>
    </ThemeImporter>
  )
}

Dropdown.propTypes = ReactStrapDropdown.propTypes

export default Dropdown
