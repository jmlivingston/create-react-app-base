import { Card as ReactStrapCard } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Card = props => {
  return (
    <ThemeImporter sassNames={['_card']}>
      <ReactStrapCard {...props} />
    </ThemeImporter>
  )
}

Card.propTypes = ReactStrapCard.propTypes

export default Card
