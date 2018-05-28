import { CardGroup as ReactStrapCardGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const CardGroup = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardGroup {...props} />
    </ThemeImporter>
  )
}

CardGroup.propTypes = ReactStrapCardGroup.propTypes

export default CardGroup
