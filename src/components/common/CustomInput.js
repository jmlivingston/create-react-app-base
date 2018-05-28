import { CustomInput as ReactStrapCustomInput } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CustomInput = props => {
  return (
    <Fragment>
      <ThemeImporter path="_custom-forms">
        <ReactStrapCustomInput {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CustomInput.propTypes = ReactStrapCustomInput.propTypes

export default CustomInput
