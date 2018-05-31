import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../config'
import { Loader } from 'components/Common'

storiesOf('Loader', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Loader />)
