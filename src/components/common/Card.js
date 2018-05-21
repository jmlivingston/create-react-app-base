import { Card as ReactStrapCard } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Card = props => {
  return (
    <Fragment>
      <ThemeImporter path="_card">
        <ReactStrapCard {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Card.propTypes = ReactStrapCard.propTypes

export default Card
