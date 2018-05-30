import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { default as Collapse } from './Collapse'
import { default as CollapseEvents } from './CollapseEvents'

storiesOf('Collapse', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Collapse />)
  .add('Events', () => <CollapseEvents />)
