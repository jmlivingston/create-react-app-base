import { Button as ReactStrapButton } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Button = props => {
  return (
    <ThemeImporter sassNames={['buttons']}>
      <ReactStrapButton {...props} />
    </ThemeImporter>
  )
}

Button.propTypes = ReactStrapButton.propTypes

export default Button
