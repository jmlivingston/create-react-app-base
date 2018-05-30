import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
import { DateTime } from 'components/Common'

storiesOf('DateTime', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <DateTime />)
