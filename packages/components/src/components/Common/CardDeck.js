import { CardDeck as ReactStrapCardDeck } from 'reactstrap'
import React from 'react'

const CardDeck = props => {
  return <ReactStrapCardDeck {...props} />
}

CardDeck.propTypes = ReactStrapCardDeck.propTypes

export default CardDeck
