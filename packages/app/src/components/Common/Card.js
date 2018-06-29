import { Card as ReactStrapCard } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Card = props => {
  return (
    <ThemeImporter sassNames={['card']}>
      <ReactStrapCard {...props} />
    </ThemeImporter>
  )
}

Card.propTypes = ReactStrapCard.propTypes

export default Card
