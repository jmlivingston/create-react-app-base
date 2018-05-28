import { ButtonDropdown as ReactStrapButtonDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const ButtonDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_buttons">
        <ReactStrapButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ButtonDropdown.propTypes = ReactStrapButtonDropdown.propTypes

export default ButtonDropdown
