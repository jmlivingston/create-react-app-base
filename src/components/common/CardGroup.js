import { CardGroup as ReactStrapCardGroup } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardgroup">
        <ReactStrapCardGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardGroup.propTypes = ReactStrapCardGroup.propTypes

export default CardGroup
