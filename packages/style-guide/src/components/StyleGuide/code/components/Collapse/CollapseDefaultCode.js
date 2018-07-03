const CollapseDefaultCode = `import React, { Fragment, PureComponent } from 'react'

import { Collapse, Button, CardBody, Card } from '@myorg/components'

class CollapseDefault extends PureComponent {
  state = { collapse: false }

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }))
  }

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={() => this.toggle()} style={{ marginBottom: '1rem' }}>
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse} timeout={0}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </Fragment>
    )
  }
}

export default CollapseDefault
`

export default CollapseDefaultCode
