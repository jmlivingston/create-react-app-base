const TooltipDefaultCode = `/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import { Tooltip } from 'components/Common'

export default class TooltipDefault extends React.Component {
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
          Somewhere in here is a{' '}
          <a href="/" id="TooltipTooltipDefault">
            tooltip
          </a>.
        </p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipTooltipDefault" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    )
  }
}
`

export default TooltipDefaultCode