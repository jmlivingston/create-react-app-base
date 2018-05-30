import { UncontrolledDropdown as ReactStrapUncontrolledDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const UncontrolledDropdown = props => {
  return (
    <ThemeImporter sassNames={['_dropdown', '_buttons']}>
      <ReactStrapUncontrolledDropdown {...props} />
    </ThemeImporter>
  )
}

UncontrolledDropdown.propTypes = ReactStrapUncontrolledDropdown.propTypes

export default UncontrolledDropdown
