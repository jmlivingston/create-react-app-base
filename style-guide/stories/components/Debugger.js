import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../config'
import { Debugger } from 'components/Common'

storiesOf('Debugger', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Debugger />)
