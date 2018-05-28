import { CustomInput as ReactStrapCustomInput } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const CustomInput = props => {
  return (
    <ThemeImporter sassNames={['_custom-forms', '_buttons']}>
      <ReactStrapCustomInput {...props} />
    </ThemeImporter>
  )
}

CustomInput.propTypes = ReactStrapCustomInput.propTypes

export default CustomInput
