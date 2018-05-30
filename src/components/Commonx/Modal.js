import { Modal as ReactStrapModal } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Modal = props => {
  return (
    <ThemeImporter sassNames={['_modal']}>
      <ReactStrapModal {...props} />
    </ThemeImporter>
  )
}

Modal.propTypes = ReactStrapModal.propTypes

export default Modal
