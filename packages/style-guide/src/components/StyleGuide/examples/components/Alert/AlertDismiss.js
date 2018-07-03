import React, { PureComponent } from 'react'

import { Alert } from '@myorg/components'

class AlertDismiss extends PureComponent {
  state = {
    visible: true
  }

  onDismiss() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={() => this.onDismiss()}>
        I am an alert and I can be dismissed!
      </Alert>
    )
  }
}

export default AlertDismiss
