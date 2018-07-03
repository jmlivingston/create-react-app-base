import { CustomInput as ReactStrapCustomInput } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const CustomInput = props => {
  return (
    <ThemeImporter sassNames={['custom-forms', 'buttons']}>
      <ReactStrapCustomInput {...props} />
    </ThemeImporter>
  )
}

CustomInput.propTypes = ReactStrapCustomInput.propTypes

export default CustomInput
