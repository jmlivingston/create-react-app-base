const FadeDefaultCode = `import React, { Fragment, PureComponent } from 'react'

import { Button, Fade } from '@myorg/components'

class FadeDefault extends PureComponent {
  state = { fadeIn: true }

  toggle() {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }))
  }

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={() => this.toggle()}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={0}>
          This content will fade in and out as the button is pressed
        </Fade>
      </Fragment>
    )
  }
}

export default FadeDefault
`

export default FadeDefaultCode
