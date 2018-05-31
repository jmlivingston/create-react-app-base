import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Breadcrumb } from './Breadcrumb'
import { default as BreadcrumbNoList } from './BreadcrumbNoList'

storiesOf('Breadcrumb', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Breadcrumb />))
  .add('NoList', withInfo(config.defaults.info)(() => <BreadcrumbNoList />))
