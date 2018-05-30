import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Collapse } from './Collapse'
	import { default as CollapseEvents } from './CollapseEvents'

storiesOf('Collapse', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Collapse />)
.add('Events', () => <CollapseEvents />)
