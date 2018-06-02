import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Collapse, Button, CardBody, Card } from 'components/Common'
import config from '../../config'

storiesOf('Collapse', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse} timeout={0}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    ))
  )
