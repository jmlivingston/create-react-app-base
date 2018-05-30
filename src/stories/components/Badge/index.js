import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Badge } from './Badge'
	import { default as BadgeButton } from './BadgeButton'
	import { default as BadgeLinks } from './BadgeLinks'
	import { default as BadgePills } from './BadgePills'
	import { default as BadgeVariations } from './BadgeVariations'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Badge />)
.add('Button', () => <BadgeButton />)
.add('Links', () => <BadgeLinks />)
.add('Pills', () => <BadgePills />)
.add('Variations', () => <BadgeVariations />)