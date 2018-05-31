import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as CustomDropdown } from './CustomDropdown'
import { default as InlineCheckboxes } from './InlineCheckboxes'

storiesOf('Misc', module)
  .addDecorator(config.wrapper)
  .add('CustomDropdown', () => <CustomDropdown />)
  .add('InlineCheckboxes', () => <InlineCheckboxes />)
