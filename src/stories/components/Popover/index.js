import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Popover } from './Popover'
	import { default as PopoverMulti } from './PopoverMulti'

storiesOf('Popover', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Popover />)
.add('Multi', () => <PopoverMulti />)
