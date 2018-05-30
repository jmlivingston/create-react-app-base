import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Tooltip } from './Tooltip'
	import { default as TooltipAutoHide } from './TooltipAutoHide'
	import { default as TooltipMulti } from './TooltipMulti'
	import { default as TooltipUncontrolled } from './TooltipUncontrolled'

storiesOf('Tooltip', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Tooltip />)
.add('AutoHide', () => <TooltipAutoHide />)
.add('Multi', () => <TooltipMulti />)
.add('Uncontrolled', () => <TooltipUncontrolled />)
