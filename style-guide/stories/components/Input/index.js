import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as InputGridSizing } from './InputGridSizing'
import { default as InputGroupAddon } from './InputGroupAddon'
import { default as InputGroupButton } from './InputGroupButton'
import { default as InputGroupButtonDropdown } from './InputGroupButtonDropdown'
import { default as InputGroupButtonShorthand } from './InputGroupButtonShorthand'
import { default as InputGroupOverview } from './InputGroupOverview'
import { default as InputGroupSizing } from './InputGroupSizing'
import { default as InputSizing } from './InputSizing'
import { default as InputType } from './InputType'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add('GridSizing', withInfo(config.defaults.info)(() => <InputGridSizing />))
  .add('GroupAddon', withInfo(config.defaults.info)(() => <InputGroupAddon />))
  .add('GroupButton', withInfo(config.defaults.info)(() => <InputGroupButton />))
  .add('GroupButtonDropdown', withInfo(config.defaults.info)(() => <InputGroupButtonDropdown />))
  .add('GroupButtonShorthand', withInfo(config.defaults.info)(() => <InputGroupButtonShorthand />))
  .add('GroupOverview', withInfo(config.defaults.info)(() => <InputGroupOverview />))
  .add('GroupSizing', withInfo(config.defaults.info)(() => <InputGroupSizing />))
  .add('Sizing', withInfo(config.defaults.info)(() => <InputSizing />))
  .add('Type', withInfo(config.defaults.info)(() => <InputType />))
