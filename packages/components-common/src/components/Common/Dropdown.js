import { Dropdown as ReactStrapDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Dropdown = props => {
  return (
    <ThemeImporter sassNames={['dropdown', 'buttons']}>
      <ReactStrapDropdown {...props}>{props.children}</ReactStrapDropdown>
    </ThemeImporter>
  )
}

Dropdown.propTypes = ReactStrapDropdown.propTypes

export default Dropdown
