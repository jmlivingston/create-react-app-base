import { UncontrolledButtonDropdown as ReactStrapUncontrolledButtonDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledButtonDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolledbuttondropdown">
        <ReactStrapUncontrolledButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledButtonDropdown.propTypes = ReactStrapUncontrolledButtonDropdown.propTypes

export default UncontrolledButtonDropdown
