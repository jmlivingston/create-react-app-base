const FormInputGroupAddonCode = `import React, { Fragment } from 'react'

import { InputGroup, InputGroupText, InputGroupAddon, Input } from '@myorg/components'

const FormInputGroupAddon = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default FormInputGroupAddon
`

export default FormInputGroupAddonCode
