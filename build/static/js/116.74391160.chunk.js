webpackJsonp([116], {
  196: function(t, n, o) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      "/* eslint react/no-multi-comp: 0, react/prop-types: 0 */\n\nimport React from 'react'\nimport { Button, Tooltip } from 'components/Common'\n\nclass TooltipItem extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      tooltipOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    })\n  }\n\n  render() {\n    return (\n      <span>\n        <Button className=\"mr-1\" color=\"secondary\" id={'Tooltip-' + this.props.id}>\n          {this.props.item.text}\n        </Button>\n        <Tooltip\n          placement={this.props.item.placement}\n          isOpen={this.state.tooltipOpen}\n          target={'Tooltip-' + this.props.id}\n          toggle={this.toggle}>\n          Tooltip Content!\n        </Tooltip>\n      </span>\n    )\n  }\n}\n\nclass TooltipMulti extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      tooltips: [\n        {\n          placement: 'top',\n          text: 'Top'\n        },\n        {\n          placement: 'bottom',\n          text: 'Bottom'\n        },\n        {\n          placement: 'left',\n          text: 'Left'\n        },\n        {\n          placement: 'right',\n          text: 'Right'\n        }\n      ]\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        {this.state.tooltips.map((tooltip, i) => {\n          return <TooltipItem key={i} item={tooltip} id={i} />\n        })}\n      </div>\n    )\n  }\n}\n\nexport default TooltipMulti\n"
  }
})
//# sourceMappingURL=116.74391160.chunk.js.map
