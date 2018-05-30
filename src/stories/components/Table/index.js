import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Table } from './Table'
	import { default as TableBordered } from './TableBordered'
	import { default as TableBorderless } from './TableBorderless'
	import { default as TableDark } from './TableDark'
	import { default as TableHover } from './TableHover'
	import { default as TableResponsive } from './TableResponsive'
	import { default as TableSizing } from './TableSizing'
	import { default as TableStriped } from './TableStriped'

storiesOf('Table', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Table />)
.add('Bordered', () => <TableBordered />)
.add('Borderless', () => <TableBorderless />)
.add('Dark', () => <TableDark />)
.add('Hover', () => <TableHover />)
.add('Responsive', () => <TableResponsive />)
.add('Sizing', () => <TableSizing />)
.add('Striped', () => <TableStriped />)
