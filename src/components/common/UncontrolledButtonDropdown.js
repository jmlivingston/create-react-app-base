import { UncontrolledButtonDropdown as ReactStrapUncontrolledButtonDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const UncontrolledButtonDropdown = props => {
  return (
    <ThemeImporter sassNames={['_dropdown', '_buttons']}>
      <ReactStrapUncontrolledButtonDropdown {...props} />
    </ThemeImporter>
  )
}

UncontrolledButtonDropdown.propTypes = ReactStrapUncontrolledButtonDropdown.propTypes

export default UncontrolledButtonDropdown
