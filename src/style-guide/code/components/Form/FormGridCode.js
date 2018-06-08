const FormGridCode = `import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'components/Common'

export default class FormGrid extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmailFormGrid" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmailFormGrid" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePasswordFormGrid" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePasswordFormGrid" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectFormGrid" sm={2}>
            Select
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelectFormGrid" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMultiFormGrid" sm={2}>
            Select Multiple
          </Label>
          <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMultiFormGrid" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleTextFormGrid" sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleTextFormGrid" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFileFormGrid" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFileFormGrid" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to
              a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option two can be something else and selecting it will deselect
                option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled /> Option three is disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
`

export default FormGridCode
