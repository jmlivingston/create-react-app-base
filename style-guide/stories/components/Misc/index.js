import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as CustomDropdown } from './CustomDropdown'
import { default as InlineCheckboxes } from './InlineCheckboxes'

storiesOf('Misc', module)
  .addDecorator(config.wrapper)
  .add('CustomDropdown', withInfo(config.defaults.info)(() => <CustomDropdown />))
  .add('InlineCheckboxes', withInfo(config.defaults.info)(() => <InlineCheckboxes />))
