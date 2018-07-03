const TooltipMultiCode = `import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Button, Tooltip } from '@myorg/components'

class TooltipItem extends PureComponent {
  state = {
    tooltipOpen: false
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.shape({
      text: PropTypes.string.isRequired,
      placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
    })
  }

  toggle() {
    this.setState(prevState => ({
      tooltipOpen: !prevState.tooltipOpen
    }))
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip
          placement={this.props.item.placement}
          isOpen={this.state.tooltipOpen}
          target={'Tooltip-' + this.props.id}
          toggle={() => this.toggle()}>
          Tooltip Content!
        </Tooltip>
      </span>
    )
  }
}

const TooltipMulti = () => {
  const tooltips = [
    {
      placement: 'top',
      text: 'Top'
    },
    {
      placement: 'bottom',
      text: 'Bottom'
    },
    {
      placement: 'left',
      text: 'Left'
    },
    {
      placement: 'right',
      text: 'Right'
    }
  ]

  return (
    <Fragment>
      {tooltips.map((tooltip, i) => {
        return <TooltipItem key={i} item={tooltip} id={i} />
      })}
    </Fragment>
  )
}

export default TooltipMulti
`

export default TooltipMultiCode
