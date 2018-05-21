import { CardText as ReactStrapCardText } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardText = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardtext">
        <ReactStrapCardText {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardText.propTypes = ReactStrapCardText.propTypes

export default CardText
