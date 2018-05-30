import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { default as Fade } from './Fade'

storiesOf('Fade', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Fade />)
