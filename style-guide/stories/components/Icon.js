import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../config'
import { Icon } from 'components/Common'

storiesOf('Icon', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Icon />)
