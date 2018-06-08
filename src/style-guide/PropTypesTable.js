import parsePropTypes from 'parse-prop-types'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { importComponentByName } from './styleGuideData'
import { Table } from 'components/Common'

class PropTypesTableInner extends Component {
  state = {}

  componentDidMount = async () => {
    const component = await importComponentByName(this.props.name)
    this.setState({
      propTypesInfo: component ? parsePropTypes(component.default) : {}
    })
  }

  render() {
    return this.state.propTypesInfo ? (
      <Fragment>
        <h3>{this.props.name} Prop Types</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.propTypesInfo).map(key => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{this.state.propTypesInfo[key].type ? this.state.propTypesInfo[key].type.name : ''}</td>
                  <td>{this.state.propTypesInfo[key].required.toString()}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Fragment>
    ) : null
  }
}

const PropTypesTable = ({ components }) => {
  return Object.keys(components).length > 0
    ? components.map(component => {
        return <PropTypesTableInner key={component} name={component} />
      })
    : null
}

PropTypesTable.propTypes = {
  components: PropTypes.arrayOf(PropTypes.string)
}

export default PropTypesTable
