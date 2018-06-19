const FormInputGridSizingCode = `import React from 'react'

import { Col, Form, FormGroup, Label, Input } from 'components/Common'

const FormInputGridSizing = () => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmailFormInputGridSizing1" sm={2} size="lg">
          Email
        </Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmailFormInputGridSizing1" placeholder="lg" bsSize="lg" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmailFormInputGridSizing2" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmailFormInputGridSizing2" placeholder="default" />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default FormInputGridSizing
`

export default FormInputGridSizingCode
