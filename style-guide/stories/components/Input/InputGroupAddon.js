import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'GroupAddon',
    withInfo(config.defaults.info)(() => (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To the Left!</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <InputGroupText>To the Right!</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To the Left!</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append">
            <InputGroupText>To the Right!</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    ))
  )
