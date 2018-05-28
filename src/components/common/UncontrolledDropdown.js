import { UncontrolledDropdown as ReactStrapUncontrolledDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const UncontrolledDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_dropdown">
        <ReactStrapUncontrolledDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledDropdown.propTypes = ReactStrapUncontrolledDropdown.propTypes

export default UncontrolledDropdown
