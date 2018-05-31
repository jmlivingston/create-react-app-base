import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
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
