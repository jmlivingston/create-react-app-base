import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Button } from './Button'
import { default as ButtonDropdown } from './ButtonDropdown'
import { default as ButtonDropdownMulti } from './ButtonDropdownMulti'
import { default as ButtonDropdownMultiSplit } from './ButtonDropdownMultiSplit'
import { default as ButtonGroup } from './ButtonGroup'
import { default as ButtonOutline } from './ButtonOutline'
import { default as ButtonStateful } from './ButtonStateful'
import { default as ButtonToolbar } from './ButtonToolbar'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Button />)
  .add('Dropdown', () => <ButtonDropdown />)
  .add('DropdownMulti', () => <ButtonDropdownMulti />)
  .add('DropdownMultiSplit', () => <ButtonDropdownMultiSplit />)
  .add('Group', () => <ButtonGroup />)
  .add('Outline', () => <ButtonOutline />)
  .add('Stateful', () => <ButtonStateful />)
  .add('Toolbar', () => <ButtonToolbar />)
