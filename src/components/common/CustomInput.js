import { CustomInput as ReactStrapCustomInput } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CustomInput = props => {
  return (
    <Fragment>
      <ThemeImporter path="_custominput">
        <ReactStrapCustomInput {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CustomInput.propTypes = ReactStrapCustomInput.propTypes

export default CustomInput
