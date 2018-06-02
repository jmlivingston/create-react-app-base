import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Form, FormGroup, Label, Input } from 'components/Common'
import config from '../../config'

storiesOf('Misc', module)
  .addDecorator(config.wrapper)
  .add(
    'InlineCheckboxes',
    withInfo(config.defaults.info)(() => (
      <Form>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some input
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some other input
          </Label>
        </FormGroup>
      </Form>
    ))
  )
