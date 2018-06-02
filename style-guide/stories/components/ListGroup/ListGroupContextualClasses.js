import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { ListGroup, ListGroupItem } from 'components/Common'
import config from '../../config'

storiesOf('ListGroup', module)
  .addDecorator(config.wrapper)
  .add(
    'ContextualClasses',
    withInfo(config.defaults.info)(() => (
      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    ))
  )
