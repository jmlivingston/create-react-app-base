import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Badge } from 'components/Common'
import config from '../../config'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <h1>
          Heading <Badge color="secondary">New</Badge>
        </h1>
        <h2>
          Heading <Badge color="secondary">New</Badge>
        </h2>
        <h3>
          Heading <Badge color="secondary">New</Badge>
        </h3>
        <h4>
          Heading <Badge color="secondary">New</Badge>
        </h4>
        <h5>
          Heading <Badge color="secondary">New</Badge>
        </h5>
        <h6>
          Heading <Badge color="secondary">New</Badge>
        </h6>
      </div>
    ))
  )
