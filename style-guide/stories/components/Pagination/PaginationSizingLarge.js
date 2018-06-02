import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Pagination, PaginationItem, PaginationLink } from 'components/Common'
import config from '../../config'

storiesOf('Pagination', module)
  .addDecorator(config.wrapper)
  .add(
    'SizingLarge',
    withInfo(config.defaults.info)(() => (
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="/" />
        </PaginationItem>
      </Pagination>
    ))
  )
