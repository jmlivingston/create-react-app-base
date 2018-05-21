import { InputGroupText as ReactStrapInputGroupText } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const InputGroupText = props => {
  return (
    <Fragment>
      <ThemeImporter path="_inputgrouptext">
        <ReactStrapInputGroupText {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

InputGroupText.propTypes = ReactStrapInputGroupText.propTypes

export default InputGroupText
