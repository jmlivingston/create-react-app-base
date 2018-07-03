import { UncontrolledDropdown as ReactStrapUncontrolledDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const UncontrolledDropdown = props => {
  return (
    <ThemeImporter sassNames={['dropdown', 'buttons']}>
      <ReactStrapUncontrolledDropdown {...props} />
    </ThemeImporter>
  )
}

UncontrolledDropdown.propTypes = ReactStrapUncontrolledDropdown.propTypes

export default UncontrolledDropdown
