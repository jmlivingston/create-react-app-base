import { Button as ReactStrapButton } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Button = props => {
  return (
    <Fragment>
      <ThemeImporter path="_buttons">
        <ReactStrapButton {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Button.propTypes = ReactStrapButton.propTypes

export default Button
