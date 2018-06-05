const FormFeedbackDefaultCode = `import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'components/Common'

export default class FormFeedbackDefault extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmailFormFeedbackDefault1">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>FormFeedback help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmailFormFeedbackDefault2">Valid input</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>FormFeedback help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePasswordFormFeedbackDefault">Invalid input</Label>
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>FormFeedback help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>
    )
  }
}
`

export default FormFeedbackDefaultCode