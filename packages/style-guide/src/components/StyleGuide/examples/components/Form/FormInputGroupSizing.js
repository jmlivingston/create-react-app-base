import React, { Fragment } from 'react'

import { InputGroup, InputGroupAddon, Input } from '@myorg/components-common'

const FormInputGroupSizing = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default FormInputGroupSizing
