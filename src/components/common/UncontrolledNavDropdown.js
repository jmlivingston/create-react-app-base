import { UncontrolledNavDropdown as ReactStrapUncontrolledNavDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledNavDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrollednavdropdown">
        <ReactStrapUncontrolledNavDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledNavDropdown.propTypes = ReactStrapUncontrolledNavDropdown.propTypes

export default UncontrolledNavDropdown
