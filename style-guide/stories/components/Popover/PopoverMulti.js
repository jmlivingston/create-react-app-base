import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from 'components/Common'
import config from '../../config'

storiesOf('Popover', module)
  .addDecorator(config.wrapper)
  .add(
    'Multi',
    withInfo(config.defaults.info)(() => (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.text}
        </Button>
        <Popover
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={'Popover-' + this.props.id}
          toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </PopoverBody>
        </Popover>
      </span>
    ))
  )
