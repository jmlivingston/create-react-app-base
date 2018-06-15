const FormInputGroupAddonCode = `import React from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'components/Common'

const FormInputGroupAddon = props => {
  return (
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
  )
}

export default FormInputGroupAddon
`

export default FormInputGroupAddonCode