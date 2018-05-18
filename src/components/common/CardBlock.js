import { CardBlock as ReactStrapCardBlock } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardBlock = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardblock">
        <ReactStrapCardBlock {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardBlock.propTypes = ReactStrapCardBlock.propTypes

export default CardBlock
