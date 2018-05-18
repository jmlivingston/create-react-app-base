import { Row as ReactStrapRow } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Row = props => {
  return (
    <Fragment>
      <ThemeImporter path="_row">
        <ReactStrapRow {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Row.propTypes = ReactStrapRow.propTypes

export default Row
