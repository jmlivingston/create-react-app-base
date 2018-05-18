import { CardColumns as ReactStrapCardColumns } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardColumns = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardcolumns">
        <ReactStrapCardColumns {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardColumns.propTypes = ReactStrapCardColumns.propTypes

export default CardColumns
