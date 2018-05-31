import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Fade } from './Fade'

storiesOf('Fade', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Fade />))
