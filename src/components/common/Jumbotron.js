import { Jumbotron as ReactStrapJumbotron } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Jumbotron = props => {
  return (
    <ThemeImporter sassNames={['_jumbotron']}>
      <ReactStrapJumbotron {...props} />
    </ThemeImporter>
  )
}

Jumbotron.propTypes = ReactStrapJumbotron.propTypes

export default Jumbotron
