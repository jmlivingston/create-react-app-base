import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Breadcrumb } from './Breadcrumb'
	import { default as BreadcrumbNoList } from './BreadcrumbNoList'

storiesOf('Breadcrumb', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Breadcrumb />)
.add('NoList', () => <BreadcrumbNoList />)
