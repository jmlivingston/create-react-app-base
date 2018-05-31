import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Jumbotron } from './Jumbotron'
import { default as JumbotronFluid } from './JumbotronFluid'

storiesOf('Jumbotron', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Jumbotron />)
  .add('Fluid', () => <JumbotronFluid />)
