import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as CustomDropdown } from './CustomDropdown'
	import { default as Dropdown } from './Dropdown'
	import { default as DropdownSizing } from './DropdownSizing'
	import { default as DropdownUncontrolled } from './DropdownUncontrolled'

storiesOf('Dropdown', module)
  .addDecorator(config.wrapper)
  .add('Custom', () => <CustomDropdown />)
.add('Default', () => <Dropdown />)
.add('Sizing', () => <DropdownSizing />)
.add('Uncontrolled', () => <DropdownUncontrolled />)
