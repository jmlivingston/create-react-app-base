webpackJsonp([170],{143:function(n,p,u){"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.default='import React from \'react\'\nimport { InputGroup, InputGroupAddon, InputGroupText, Input } from \'components/Common\'\n\nconst FormInputGroupOverview = props => {\n  return (\n    <div>\n      <InputGroup>\n        <InputGroupAddon addonType="prepend">@</InputGroupAddon>\n        <Input placeholder="username" />\n      </InputGroup>\n      <br />\n      <InputGroup>\n        <InputGroupAddon addonType="prepend">\n          <InputGroupText>\n            <Input addon type="checkbox" aria-label="Checkbox for following text input" />\n          </InputGroupText>\n        </InputGroupAddon>\n        <Input placeholder="Check it out" />\n      </InputGroup>\n      <br />\n      <InputGroup>\n        <Input placeholder="username" />\n        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>\n      </InputGroup>\n      <br />\n      <InputGroup>\n        <InputGroupAddon addonType="prepend">\n          <InputGroupText>$</InputGroupText>\n          <InputGroupText>$</InputGroupText>\n        </InputGroupAddon>\n        <Input placeholder="Dolla dolla billz yo!" />\n        <InputGroupAddon addonType="append">\n          <InputGroupText>$</InputGroupText>\n          <InputGroupText>$</InputGroupText>\n        </InputGroupAddon>\n      </InputGroup>\n      <br />\n      <InputGroup>\n        <InputGroupAddon addonType="prepend">$</InputGroupAddon>\n        <Input placeholder="Amount" type="number" step="1" />\n        <InputGroupAddon addonType="append">.00</InputGroupAddon>\n      </InputGroup>\n    </div>\n  )\n}\n\nexport default FormInputGroupOverview\n'}});
//# sourceMappingURL=170.426a772c.chunk.js.map