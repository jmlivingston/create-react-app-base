import React, { Fragment, PureComponent } from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from 'components/Common'

class PopoverDefault extends PureComponent {
  state = {
    popoverOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }))
  }

  render() {
    return (
      <Fragment>
        <Button id="Popover1" onClick={() => this.toggle()}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={() => this.toggle()}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </PopoverBody>
        </Popover>
      </Fragment>
    )
  }
}

export default PopoverDefault
