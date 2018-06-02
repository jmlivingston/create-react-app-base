import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'GroupOverview',
    withInfo(config.defaults.info)(() => (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Check it out" />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder="username" />
          <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Dolla dolla billz yo!" />
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input placeholder="Amount" type="number" step="1" />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
      </div>
    ))
  )
