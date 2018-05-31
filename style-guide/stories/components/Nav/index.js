import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
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
  .add('Pills', withInfo(config.defaults.info)(() => <NavPills />))
  .add('Tabs', withInfo(config.defaults.info)(() => <NavTabs />))
  .add('Vertical', withInfo(config.defaults.info)(() => <NavVertical />))
  .add('bar', withInfo(config.defaults.info)(() => <Navbar />))
  .add('barToggler', withInfo(config.defaults.info)(() => <NavbarToggler />))
  .add('s', withInfo(config.defaults.info)(() => <Navs />))
