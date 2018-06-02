import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, ButtonGroup } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'Group',
    withInfo(config.defaults.info)(() => (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    ))
  )
