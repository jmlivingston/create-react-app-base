import { UncontrolledButtonDropdown as ReactStrapUncontrolledButtonDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const UncontrolledButtonDropdown = props => {
  return (
    <ThemeImporter sassNames={['dropdown', 'buttons']}>
      <ReactStrapUncontrolledButtonDropdown {...props} />
    </ThemeImporter>
  )
}

UncontrolledButtonDropdown.propTypes = ReactStrapUncontrolledButtonDropdown.propTypes

export default UncontrolledButtonDropdown
