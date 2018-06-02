import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Form, Input } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'Sizing',
    withInfo(config.defaults.info)(() => (
      <Form>
        <Input placeholder="lg" bsSize="lg" />
        <Input placeholder="default" />
        <Input placeholder="sm" bsSize="sm" />
        <Input type="select" bsSize="lg">
          <option>Large Select</option>
        </Input>
        <Input type="select">
          <option>Default Select</option>
        </Input>
        <Input type="select" bsSize="sm">
          <option>Small Select</option>
        </Input>
      </Form>
    ))
  )
