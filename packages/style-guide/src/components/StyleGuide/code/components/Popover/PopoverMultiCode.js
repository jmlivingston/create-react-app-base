const PopoverMultiCode = `import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from '@myorg/components-common'

class PopoverItem extends PureComponent {
  state = {
    popoverOpen: false
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
      popoverOpen: !prevState.popoverOpen
    }))
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={() => this.toggle()}>
          {this.props.item.text}
        </Button>
        <Popover
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={'Popover-' + this.props.id}
          toggle={() => this.toggle()}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </PopoverBody>
        </Popover>
      </span>
    )
  }
}

const PopoverMulti = () => {
  const popovers = [
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
      {popovers.map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />
      })}
    </Fragment>
  )
}

export default PopoverMulti
`

export default PopoverMultiCode
