import { PopperTargetHelper as ReactStrapPopperTargetHelper } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopperTargetHelper = props => {
  return (
    <Fragment>
      <ThemeImporter path="_poppertargethelper">
        <ReactStrapPopperTargetHelper {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopperTargetHelper.propTypes = ReactStrapPopperTargetHelper.propTypes

export default PopperTargetHelper
