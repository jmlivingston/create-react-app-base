import { Button as ReactStrapButton } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Button = props => {
  return (
    <Fragment>
      <ThemeImporter path="_button">
        <ReactStrapButton {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Button.propTypes = ReactStrapButton.propTypes

export default Button
