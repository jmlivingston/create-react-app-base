import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { UncontrolledTooltip } from 'components/Common'
import config from '../../config'

storiesOf('Tooltip', module)
  .addDecorator(config.wrapper)
  .add(
    'Uncontrolled',
    withInfo(config.defaults.info)(() => (
      <div>
        <p>
          Somewhere in here is a{' '}
          <a href="/" id="UncontrolledTooltipExample">
            tooltip
          </a>.
        </p>
        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
          Hello world!
        </UncontrolledTooltip>
      </div>
    ))
  )
