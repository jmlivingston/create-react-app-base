import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { InputGroup, InputGroupAddon, Button, Input } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'GroupButtonShorthand',
    withInfo(config.defaults.info)(() => (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>To the Left!</Button>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <Button color="secondary">To the Right!</Button>
          </InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button color="danger">To the Left!</Button>
          </InputGroupAddon>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append">
            <Button color="success">To the Right!</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    ))
  )
