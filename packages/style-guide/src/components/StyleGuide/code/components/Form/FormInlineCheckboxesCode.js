const FormInlineCheckboxesCode = `import React from 'react'

import { Form, FormGroup, Label, Input } from '@myorg/components-common'

const FormInlineCheckboxes = () => {
  return (
    <Form>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Some other input
        </Label>
      </FormGroup>
    </Form>
  )
}

export default FormInlineCheckboxes
`

export default FormInlineCheckboxesCode
