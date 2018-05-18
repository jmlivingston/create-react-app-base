import { CardDeck as ReactStrapCardDeck } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardDeck = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carddeck">
        <ReactStrapCardDeck {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardDeck.propTypes = ReactStrapCardDeck.propTypes

export default CardDeck
