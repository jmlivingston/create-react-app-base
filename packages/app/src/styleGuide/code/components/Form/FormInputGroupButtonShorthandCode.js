const FormInputGroupButtonShorthandCode = `import React, { Fragment } from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'components/Common'

const FormInputGroupButtonShorthand = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default FormInputGroupButtonShorthand
`

export default FormInputGroupButtonShorthandCode
