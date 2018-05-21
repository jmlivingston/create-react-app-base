import { Input as ReactStrapInput } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Input = props => {
  return (
    <Fragment>
      <ThemeImporter path="_input">
        <ReactStrapInput {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Input.propTypes = ReactStrapInput.propTypes

export default Input
