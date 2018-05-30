import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as NavPills } from './NavPills'
	import { default as NavTabs } from './NavTabs'
	import { default as NavVertical } from './NavVertical'
	import { default as Navbar } from './Navbar'
	import { default as NavbarToggler } from './NavbarToggler'
	import { default as Navs } from './Navs'

storiesOf('Nav', module)
  .addDecorator(config.wrapper)
  .add('Pills', () => <NavPills />)
.add('Tabs', () => <NavTabs />)
.add('Vertical', () => <NavVertical />)
.add('bar', () => <Navbar />)
.add('barToggler', () => <NavbarToggler />)
.add('s', () => <Navs />)
