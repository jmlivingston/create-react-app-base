import { Modal as ReactStrapModal } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Modal = props => {
  return (
    <Fragment>
      <ThemeImporter path="_modal">
        <ReactStrapModal {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Modal.propTypes = ReactStrapModal.propTypes

export default Modal
