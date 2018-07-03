import React, { Fragment, PureComponent } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@myorg/components'

class ModalExternal extends PureComponent {
  state = {
    modal: false
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={() => this.toggle()}>
        &times;
      </button>
    )
    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Modal
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle()}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={() => this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  }
}

export default ModalExternal
