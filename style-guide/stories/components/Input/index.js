import { storiesOf } from '@storybook/react'
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
  .add('GridSizing', () => <InputGridSizing />)
  .add('GroupAddon', () => <InputGroupAddon />)
  .add('GroupButton', () => <InputGroupButton />)
  .add('GroupButtonDropdown', () => <InputGroupButtonDropdown />)
  .add('GroupButtonShorthand', () => <InputGroupButtonShorthand />)
  .add('GroupOverview', () => <InputGroupOverview />)
  .add('GroupSizing', () => <InputGroupSizing />)
  .add('Sizing', () => <InputSizing />)
  .add('Type', () => <InputType />)
