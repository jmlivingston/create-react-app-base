import React, { Fragment, PureComponent } from 'react'

import { API, data } from '@myorg/core'

class ThingTodoList extends PureComponent {
  state = {
    items: []
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.thingId !== this.props.thingId) {
      const url = API.THING_TODO.GET_BY_THING_ID(this.props.thingId)
      const response = await data.get(url)
      this.setState({
        items: response.data
      })
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Todos</h1>
        {this.state.items.map(item => <div key={item.name} className="text-capitalize">{item.name}</div>)}
      </Fragment>
    )
  }
}

export default ThingTodoList
