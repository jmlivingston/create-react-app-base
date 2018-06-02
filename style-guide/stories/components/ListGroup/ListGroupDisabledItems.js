import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { ListGroup, ListGroupItem } from 'components/Common'
import config from '../../config'

storiesOf('ListGroup', module)
  .addDecorator(config.wrapper)
  .add(
    'DisabledItems',
    withInfo(config.defaults.info)(() => (
      <ListGroup>
        <ListGroupItem disabled tag="a" href="/">
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem tag="a" href="/">
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem tag="a" href="/">
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem tag="a" href="/">
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem tag="a" href="/">
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    ))
  )
