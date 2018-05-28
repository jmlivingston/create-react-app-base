import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as Fade } from './Fade'

storiesOf('Fade', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Fade />)
