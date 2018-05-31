import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Jumbotron } from './Jumbotron'
import { default as JumbotronFluid } from './JumbotronFluid'

storiesOf('Jumbotron', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Jumbotron />))
  .add('Fluid', withInfo(config.defaults.info)(() => <JumbotronFluid />))
