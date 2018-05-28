import { UncontrolledButtonDropdown as ReactStrapUncontrolledButtonDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const UncontrolledButtonDropdown = props => {
  // TODO: PROBABLY NEEDS dropdown as well. need to refactor ThemeImporter to use paths instead of path
  return (
    <Fragment>
      <ThemeImporter path="_buttons">
        <ReactStrapUncontrolledButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledButtonDropdown.propTypes = ReactStrapUncontrolledButtonDropdown.propTypes

export default UncontrolledButtonDropdown
