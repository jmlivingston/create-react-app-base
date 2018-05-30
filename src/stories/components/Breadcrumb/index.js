import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { default as Breadcrumb } from './Breadcrumb'
import { default as BreadcrumbNoList } from './BreadcrumbNoList'

storiesOf('Breadcrumb', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Breadcrumb />)
  .add('NoList', () => <BreadcrumbNoList />)
