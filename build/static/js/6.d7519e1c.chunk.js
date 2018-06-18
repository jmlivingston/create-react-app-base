(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{458:function(n,t,a){"use strict";a.r(t);t.default="import React from 'react'\nimport {\n  TabContent,\n  TabPane,\n  Nav,\n  NavItem,\n  NavLink,\n  Card,\n  Button,\n  CardTitle,\n  CardText,\n  Row,\n  Col\n} from 'components/Common'\nimport classnames from 'classnames'\n\nexport default class TabsDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      activeTab: '1'\n    }\n  }\n\n  toggle(tab) {\n    if (this.state.activeTab !== tab) {\n      this.setState({\n        activeTab: tab\n      })\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Nav tabs>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === '1' })}\n              onClick={() => {\n                this.toggle('1')\n              }}>\n              Tab1\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === '2' })}\n              onClick={() => {\n                this.toggle('2')\n              }}>\n              Moar Tabs\n            </NavLink>\n          </NavItem>\n        </Nav>\n        <TabContent activeTab={this.state.activeTab}>\n          <TabPane tabId=\"1\">\n            <Row>\n              <Col sm=\"12\">\n                <h4>Tab 1 Contents</h4>\n              </Col>\n            </Row>\n          </TabPane>\n          <TabPane tabId=\"2\">\n            <Row>\n              <Col sm=\"6\">\n                <Card body>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n              <Col sm=\"6\">\n                <Card body>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n            </Row>\n          </TabPane>\n        </TabContent>\n      </div>\n    )\n  }\n}\n"}}]);
//# sourceMappingURL=6.d7519e1c.chunk.js.map