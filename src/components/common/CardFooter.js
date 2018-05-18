import { CardFooter as ReactStrapCardFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardFooter = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardfooter">
        <ReactStrapCardFooter {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardFooter.propTypes = ReactStrapCardFooter.propTypes

export default CardFooter
