import React, { Fragment, PureComponent } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from '@myorg/components'

class ModalBackdrop extends PureComponent {
  state = {
    modal: false,
    backdrop: true
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  changeBackdrop(e) {
    let value = e.target.value
    if (value !== 'static') {
      value = JSON.parse(value)
    }
    this.setState({ backdrop: value })
  }

  render() {
    return (
      <Fragment>
        <Form inline onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            <Input type="select" name="backdrop" id="backdrop" onChange={() => this.changeBackdrop()}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup>{' '}
          <Button color="danger" onClick={() => this.toggle()}>
            Modal
          </Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} backdrop={this.state.backdrop}>
          <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
          <ModalBody>
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

export default ModalBackdrop
