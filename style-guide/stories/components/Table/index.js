import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
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
  .add('Default', withInfo(config.defaults.info)(() => <Table />))
  .add('Bordered', withInfo(config.defaults.info)(() => <TableBordered />))
  .add('Borderless', withInfo(config.defaults.info)(() => <TableBorderless />))
  .add('Dark', withInfo(config.defaults.info)(() => <TableDark />))
  .add('Hover', withInfo(config.defaults.info)(() => <TableHover />))
  .add('Responsive', withInfo(config.defaults.info)(() => <TableResponsive />))
  .add('Sizing', withInfo(config.defaults.info)(() => <TableSizing />))
  .add('Striped', withInfo(config.defaults.info)(() => <TableStriped />))
