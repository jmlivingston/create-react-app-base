import React, { Fragment, PureComponent } from 'react'

import { Tooltip } from 'components/Common'

class TooltipDefault extends PureComponent {
  state = {
    tooltipOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      tooltipOpen: !prevState.tooltipOpen
    }))
  }

  render() {
    return (
      <Fragment>
        <p>
          Somewhere in here is a{' '}
          <a href="/" id="TooltipTooltipDefault">
            tooltip
          </a>.
        </p>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="TooltipTooltipDefault"
          toggle={() => this.toggle()}>
          Hello world!
        </Tooltip>
      </Fragment>
    )
  }
}

export default TooltipDefault
