import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Tooltip } from 'components/Common'
import config from '../../config'

storiesOf('ToolTip', module)
  .addDecorator(config.wrapper)
  .add(
    'AutoHide',
    withInfo(config.defaults.info)(() => (
      <div>
        <p>
          Sometimes you need to allow users to select text within a{' '}
          <a href="/" id="DisabledAutoHideExample">
            tooltip
          </a>.
        </p>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          autohide={false}
          target="DisabledAutoHideExample"
          toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    ))
  )
