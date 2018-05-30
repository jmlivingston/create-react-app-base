import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Tabs } from './Tabs'

storiesOf('Tabs', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Tabs />)
