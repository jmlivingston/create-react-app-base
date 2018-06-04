import { Table } from 'components/Common'
import parsePropTypes from 'parse-prop-types'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class PropTypesTable extends PureComponent {
  state = {
    componentPropTypes: {}
  }

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  componentDidMount() {
    import('../components/Common').then(component => {
      const componentPropTypes = parsePropTypes(component[this.props.name])
      this.setState({
        componentPropTypes
      })
    })
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.state.componentPropTypes).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{this.state.componentPropTypes[key].type.name}</td>
              <td>{this.state.componentPropTypes[key].required.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
