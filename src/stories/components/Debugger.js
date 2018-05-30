import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
import { Debugger } from 'components/Common'

storiesOf('Debugger', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Debugger />)
