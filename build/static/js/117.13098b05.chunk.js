webpackJsonp([117],{195:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default='/* eslint react/no-multi-comp: 0, react/prop-types: 0 */\nimport React from \'react\'\nimport { Tooltip } from \'components/Common\'\n\nexport default class TooltipDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      tooltipOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          Somewhere in here is a{\' \'}\n          <a href="/" id="TooltipTooltipDefault">\n            tooltip\n          </a>.\n        </p>\n        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipTooltipDefault" toggle={this.toggle}>\n          Hello world!\n        </Tooltip>\n      </div>\n    )\n  }\n}\n'}});
//# sourceMappingURL=117.13098b05.chunk.js.map