import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Pagination } from './Pagination'
	import { default as PaginationSizingLarge } from './PaginationSizingLarge'
	import { default as PaginationSizingSmall } from './PaginationSizingSmall'
	import { default as PaginationState } from './PaginationState'

storiesOf('Pagination', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Pagination />)
.add('SizingLarge', () => <PaginationSizingLarge />)
.add('SizingSmall', () => <PaginationSizingSmall />)
.add('State', () => <PaginationState />)
