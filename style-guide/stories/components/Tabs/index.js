import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Tabs } from './Tabs'

storiesOf('Tabs', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Tabs />)
