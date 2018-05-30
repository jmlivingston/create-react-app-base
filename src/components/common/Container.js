import { Container as ReactStrapContainer } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Container = props => {
  return (
    <ThemeImporter>
      <ReactStrapContainer {...props} />
    </ThemeImporter>
  )
}

Container.propTypes = ReactStrapContainer.propTypes

export default Container
