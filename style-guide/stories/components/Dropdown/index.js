import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
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
