(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{545:function(n,o,t){"use strict";t.r(o);o.default="import React from 'react'\nimport { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nexport default class ButtonDropdownMulti extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle color=\"primary\" caret>\n          Dropdown\n        </DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}\n"}}]);
//# sourceMappingURL=93.a0b417fd.chunk.js.map