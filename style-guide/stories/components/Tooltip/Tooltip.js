import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Tooltip } from 'components/Common'
import config from '../../config'

storiesOf('Tooltip', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <p>
          Somewhere in here is a{' '}
          <a href="/" id="TooltipExample">
            tooltip
          </a>.
        </p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    ))
  )
