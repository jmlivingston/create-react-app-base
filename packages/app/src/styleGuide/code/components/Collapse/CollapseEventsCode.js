const CollapseEventsCode = `import React, { Fragment, PureComponent } from 'react'

import { Collapse, Button, CardBody, Card } from 'components/Common'

class CollapseEvents extends PureComponent {
  state = { collapse: false, status: 'Closed' }

  onEntering() {
    this.setState({ status: 'Opening...' })
  }

  onEntered() {
    this.setState({ status: 'Opened' })
  }

  onExiting() {
    this.setState({ status: 'Closing...' })
  }

  onExited() {
    this.setState({ status: 'Closed' })
  }

  toggle() {
    this.setState(prevState => ({ collapse: !prevState.collapse }))
  }

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={() => this.toggle()} style={{ marginBottom: '1rem' }}>
          Toggle
        </Button>
        <h5>Current state: {this.state.status}</h5>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={() => this.onEntering()}
          onEntered={() => this.onEntered()}
          onExiting={() => this.onExiting()}
          onExited={() => this.onExited()}
          timeout={0}>
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

export default CollapseEvents
`

export default CollapseEventsCode
