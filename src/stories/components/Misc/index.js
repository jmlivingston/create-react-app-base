import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as CustomDropdown } from './CustomDropdown'
	import { default as InlineCheckboxes } from './InlineCheckboxes'

storiesOf('Misc', module)
  .addDecorator(config.wrapper)
  .add('CustomDropdown', () => <CustomDropdown />)
.add('InlineCheckboxes', () => <InlineCheckboxes />)
