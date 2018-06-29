const FormDefaultCode = `import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'components/Common'

const FormDefault = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmailFormDefault">Email</Label>
        <Input type="email" name="email" id="exampleEmailFormDefault" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePasswordFormDefault">Password</Label>
        <Input type="password" name="password" id="examplePasswordFormDefault" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectFormDefault1">Select</Label>
        <Input type="select" name="select" id="exampleSelectFormDefault1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMultiFormDefault">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMultiFormDefault" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleTextFormDefault">Text Area</Label>
        <Input type="textarea" name="text" id="exampleTextFormDefault" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFileFormDefault">File</Label>
        <Input type="file" name="file" id="exampleFileFormDefault" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a
          new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something else and selecting it will deselect option
            one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default FormDefault
`

export default FormDefaultCode
