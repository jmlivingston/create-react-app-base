import { ModalFooter as ReactStrapModalFooter } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const ModalFooter = props => {
  return (
    <ThemeImporter>
      <ReactStrapModalFooter {...props} />
    </ThemeImporter>
  )
}

ModalFooter.propTypes = ReactStrapModalFooter.propTypes

export default ModalFooter
