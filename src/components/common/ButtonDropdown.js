import { ButtonDropdown as ReactStrapButtonDropdown } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ButtonDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_buttondropdown">
        <ReactStrapButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ButtonDropdown.propTypes = ReactStrapButtonDropdown.propTypes

export default ButtonDropdown
