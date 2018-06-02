import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Breadcrumb, BreadcrumbItem } from 'components/Common'
import config from '../../config'

storiesOf('Breadcrumb', module)
  .addDecorator(config.wrapper)
  .add(
    'NoList',
    withInfo(config.defaults.info)(() => (
      <div>
        <Breadcrumb tag="nav">
          <BreadcrumbItem tag="a" href="/">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="/">
            Library
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="/">
            Data
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Bootstrap
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    ))
  )
