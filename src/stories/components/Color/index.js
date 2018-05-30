import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { default as Color } from './Color'

storiesOf('Color', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Color />)
