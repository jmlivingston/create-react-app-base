import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'components/Common'
import config from '../../config'

storiesOf('Label', module)
  .addDecorator(config.wrapper)
  .add(
    'Hidden',
    withInfo(config.defaults.info)(() => (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>{' '}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>{' '}
        <Button>Submit</Button>
      </Form>
    ))
  )
