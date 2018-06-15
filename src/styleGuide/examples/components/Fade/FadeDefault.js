import React from 'react'
import { Button, Fade } from 'components/Common'

export default class FadeDefault extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fadeIn: true }
    this.toggle = this.toggle.bind(this)
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={0}>
          This content will fade in and out as the button is pressed
        </Fade>
      </div>
    )
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }
}