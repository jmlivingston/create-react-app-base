const FormInlineCode = `import React from 'react'

import { Button, Form, FormGroup, Label, Input } from '@myorg/components-common'

const FormInline = () => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmailFormInline" className="mr-sm-2">
          Email
        </Label>
        <Input type="email" name="email" id="exampleEmailFormInline" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePasswordFormInline" className="mr-sm-2">
          Password
        </Label>
        <Input type="password" name="password" id="examplePasswordFormInline" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default FormInline
`

export default FormInlineCode
