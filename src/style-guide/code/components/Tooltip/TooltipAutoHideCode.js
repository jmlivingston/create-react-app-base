const TooltipAutoHideCode = `/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import { Tooltip } from 'components/Common'

export default class TooltipAutoHide extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      tooltipOpen: false
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return (
      <div>
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
          toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    )
  }
}
`

export default TooltipAutoHideCode