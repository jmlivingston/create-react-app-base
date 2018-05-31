import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Pagination } from './Pagination'
import { default as PaginationSizingLarge } from './PaginationSizingLarge'
import { default as PaginationSizingSmall } from './PaginationSizingSmall'
import { default as PaginationState } from './PaginationState'

storiesOf('Pagination', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Pagination />))
  .add('SizingLarge', withInfo(config.defaults.info)(() => <PaginationSizingLarge />))
  .add('SizingSmall', withInfo(config.defaults.info)(() => <PaginationSizingSmall />))
  .add('State', withInfo(config.defaults.info)(() => <PaginationState />))
