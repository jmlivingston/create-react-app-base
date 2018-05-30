import { InputGroupButtonDropdown as ReactStrapInputGroupButtonDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const InputGroupButtonDropdown = props => {
  return (
    <ThemeImporter sassNames={['_dropdown', '_buttons']}>
      <ReactStrapInputGroupButtonDropdown {...props} />
    </ThemeImporter>
  )
}

InputGroupButtonDropdown.propTypes = ReactStrapInputGroupButtonDropdown.propTypes

export default InputGroupButtonDropdown
