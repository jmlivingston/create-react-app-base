webpackJsonp([136],{177:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default='/* eslint react/no-multi-comp: 0, react/prop-types: 0 */\nimport React from \'react\'\nimport { Button, Popover, PopoverHeader, PopoverBody } from \'components/Common\'\n\nexport default class PopoverDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      popoverOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button id="Popover1" onClick={this.toggle}>\n          Launch Popover\n        </Button>\n        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>\n          <PopoverHeader>Popover Title</PopoverHeader>\n          <PopoverBody>\n            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\n            vestibulum.\n          </PopoverBody>\n        </Popover>\n      </div>\n    )\n  }\n}\n'}});
//# sourceMappingURL=136.eac659d7.chunk.js.map