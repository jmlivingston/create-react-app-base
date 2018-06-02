import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Jumbotron, Container } from 'components/Common'
import config from '../../config'

storiesOf('Jumbotron', module)
  .addDecorator(config.wrapper)
  .add(
    'Fluid',
    withInfo(config.defaults.info)(() => (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </div>
    ))
  )
