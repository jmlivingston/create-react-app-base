import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Collapse } from './Collapse'
import { default as CollapseEvents } from './CollapseEvents'

storiesOf('Collapse', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Collapse />))
  .add('Events', withInfo(config.defaults.info)(() => <CollapseEvents />))
