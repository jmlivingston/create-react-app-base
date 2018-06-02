import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { InputGroup, InputGroupAddon, Input } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'GroupSizing',
    withInfo(config.defaults.info)(() => (
      <div>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup size="sm">
          <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
          <Input />
        </InputGroup>
      </div>
    ))
  )
