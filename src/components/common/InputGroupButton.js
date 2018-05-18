import { InputGroupButton as ReactStrapInputGroupButton } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const InputGroupButton = props => {
  return (
    <Fragment>
      <ThemeImporter path="_inputgroupbutton">
        <ReactStrapInputGroupButton {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

InputGroupButton.propTypes = ReactStrapInputGroupButton.propTypes

export default InputGroupButton
