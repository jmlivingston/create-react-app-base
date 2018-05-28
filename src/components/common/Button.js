import { Button as ReactStrapButton } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Button = props => {
  return (
    <ThemeImporter sassNames={['_buttons']}>
      <ReactStrapButton {...props} />
    </ThemeImporter>
  )
}

Button.propTypes = ReactStrapButton.propTypes

export default Button
