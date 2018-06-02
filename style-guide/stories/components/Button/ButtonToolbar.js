import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, ButtonGroup, ButtonToolbar } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'Toolbar',
    withInfo(config.defaults.info)(() => (
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    ))
  )
