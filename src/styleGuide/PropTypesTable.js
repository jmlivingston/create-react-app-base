import parsePropTypes from 'parse-prop-types'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { Alert, Table } from 'components/Common'
// import { Alert } from 'reactstrap'

class PropTypesTableInner extends Component {
  state = {
    propTypesInfo: {} // parsePropTypes(Alert)
  }

  static propTypes = {
    name: PropTypes.string
  }

  alertPropTypes = parsePropTypes(Alert)

  // getPropTypes = name => {
  //   const propTypesInfo
  //   switch(name) {
  //     case 'Alert':

  //       break;
  //     default:
  //   }
  // }

  componentDidMount() {
    this.setState({
      propTypesInfo: this.alertPropTypes
    })
  }

  render() {
    return (
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
            {this.state.propTypesInfo &&
              Object.keys(this.state.propTypesInfo).map(key => {
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
    )
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
