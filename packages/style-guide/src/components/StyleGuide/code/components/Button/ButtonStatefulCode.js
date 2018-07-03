const ButtonStatefulCode = `import React, { Fragment, PureComponent } from 'react'

import { Button, ButtonGroup } from '@myorg/components'

class ButtonStateful extends PureComponent {
  state = { checkBoxSelected: [] }

  onRadioClick(radioSelected) {
    this.setState({ radioSelected })
  }

  onCheckBoxClick(selected) {
    const index = this.state.checkBoxSelected.indexOf(selected)
    if (index < 0) {
      this.state.checkBoxSelected.push(selected)
    } else {
      this.state.checkBoxSelected.splice(index, 1)
    }
    this.setState({ checkBoxSelected: [...this.state.checkBoxSelected] })
  }

  render() {
    return (
      <Fragment>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioClick(1)} active={this.state.radioSelected === 1}>
            One
          </Button>
          <Button color="primary" onClick={() => this.onRadioClick(2)} active={this.state.radioSelected === 2}>
            Two
          </Button>
          <Button color="primary" onClick={() => this.onRadioClick(3)} active={this.state.radioSelected === 3}>
            Three
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.radioSelected}</p>

        <h5>Checkbox Buttons</h5>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onCheckBoxClick(1)}
            active={this.state.checkBoxSelected.includes(1)}>
            One
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckBoxClick(2)}
            active={this.state.checkBoxSelected.includes(2)}>
            Two
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckBoxClick(3)}
            active={this.state.checkBoxSelected.includes(3)}>
            Three
          </Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.checkBoxSelected)}</p>
      </Fragment>
    )
  }
}

export default ButtonStateful
`

export default ButtonStatefulCode
