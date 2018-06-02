import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Jumbotron, Button } from 'components/Common'
import config from '../../config'

storiesOf('Jumbotron', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    ))
  )
