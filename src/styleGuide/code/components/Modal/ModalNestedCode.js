const ModalNestedCode = `import React, { PureComponent } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'components/Common'

class ModalNested extends PureComponent {
  state = {
    modal: false,
    nestedModal: false,
    closeAll: false
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  toggleNested() {
    this.setState(prevState => ({
      nestedModal: !prevState.nestedModal,
      closeAll: false
    }))
  }

  toggleAll() {
    this.setState(prevState => ({
      nestedModal: !prevState.nestedModal,
      closeAll: true
    }))
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={() => this.toggle()}>
          Modal
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <br />
            <Button color="success" onClick={() => this.toggleNested()}>
              Show Nested Model
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={() => this.toggleNested()}
              onClosed={() => (this.state.closeAll ? this.toggle() : undefined)}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => this.toggleNested()}>
                  Done
                </Button>{' '}
                <Button color="secondary" onClick={() => this.toggleAll()}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
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
      </div>
    )
  }
}

export default ModalNested
`

export default ModalNestedCode
