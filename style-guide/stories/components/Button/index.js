import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
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
  .add('Default', withInfo(config.defaults.info)(() => <Button />))
  .add('Dropdown', withInfo(config.defaults.info)(() => <ButtonDropdown />))
  .add('DropdownMulti', withInfo(config.defaults.info)(() => <ButtonDropdownMulti />))
  .add('DropdownMultiSplit', withInfo(config.defaults.info)(() => <ButtonDropdownMultiSplit />))
  .add('Group', withInfo(config.defaults.info)(() => <ButtonGroup />))
  .add('Outline', withInfo(config.defaults.info)(() => <ButtonOutline />))
  .add('Stateful', withInfo(config.defaults.info)(() => <ButtonStateful />))
  .add('Toolbar', withInfo(config.defaults.info)(() => <ButtonToolbar />))
