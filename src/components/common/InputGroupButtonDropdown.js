import { InputGroupButtonDropdown as ReactStrapInputGroupButtonDropdown } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const InputGroupButtonDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_inputgroupbuttondropdown">
        <ReactStrapInputGroupButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

InputGroupButtonDropdown.propTypes = ReactStrapInputGroupButtonDropdown.propTypes

export default InputGroupButtonDropdown
