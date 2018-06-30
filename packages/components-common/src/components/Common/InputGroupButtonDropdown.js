import { InputGroupButtonDropdown as ReactStrapInputGroupButtonDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const InputGroupButtonDropdown = props => {
  return (
    <ThemeImporter sassNames={['dropdown', 'buttons']}>
      <ReactStrapInputGroupButtonDropdown {...props} />
    </ThemeImporter>
  )
}

InputGroupButtonDropdown.propTypes = ReactStrapInputGroupButtonDropdown.propTypes

export default InputGroupButtonDropdown
