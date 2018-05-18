import { ButtonToolbar as ReactStrapButtonToolbar } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ButtonToolbar = props => {
  return (
    <Fragment>
      <ThemeImporter path="_buttontoolbar">
        <ReactStrapButtonToolbar {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ButtonToolbar.propTypes = ReactStrapButtonToolbar.propTypes

export default ButtonToolbar
