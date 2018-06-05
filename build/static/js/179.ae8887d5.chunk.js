webpackJsonp([179], {
  133: function(e, a, n) {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 })
    a.default =
      'import React from \'react\'\nimport { Form, FormGroup, Label, Input, FormFeedback, FormText } from \'components/Common\'\n\nexport default class FormFeedbackDefault extends React.Component {\n  render() {\n    return (\n      <Form>\n        <FormGroup>\n          <Label for="exampleEmailFormFeedbackDefault1">Input without validation</Label>\n          <Input />\n          <FormFeedback>You will not be able to see this</FormFeedback>\n          <FormText>FormFeedback help text that remains unchanged.</FormText>\n        </FormGroup>\n        <FormGroup>\n          <Label for="exampleEmailFormFeedbackDefault2">Valid input</Label>\n          <Input valid />\n          <FormFeedback valid>Sweet! that name is available</FormFeedback>\n          <FormText>FormFeedback help text that remains unchanged.</FormText>\n        </FormGroup>\n        <FormGroup>\n          <Label for="examplePasswordFormFeedbackDefault">Invalid input</Label>\n          <Input invalid />\n          <FormFeedback>Oh noes! that name is already taken</FormFeedback>\n          <FormText>FormFeedback help text that remains unchanged.</FormText>\n        </FormGroup>\n      </Form>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=179.ae8887d5.chunk.js.map
