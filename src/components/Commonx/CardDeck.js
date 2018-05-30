import { CardDeck as ReactStrapCardDeck } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardDeck = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardDeck {...props} />
    </ThemeImporter>
  )
}

CardDeck.propTypes = ReactStrapCardDeck.propTypes

export default CardDeck
