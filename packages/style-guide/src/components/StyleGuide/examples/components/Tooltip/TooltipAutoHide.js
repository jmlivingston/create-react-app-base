import React, { Fragment, PureComponent } from 'react'

import { Tooltip } from '@myorg/components-common'

class TooltipAutoHide extends PureComponent {
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
          Sometimes you need to allow users to select text within a{' '}
          <a href="/" id="DisabledAutoHideTooltipAutoHide">
            tooltip
          </a>.
        </p>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          autohide={false}
          target="DisabledAutoHideTooltipAutoHide"
          toggle={() => this.toggle()}>
          Try to select this text!
        </Tooltip>
      </Fragment>
    )
  }
}

export default TooltipAutoHide
