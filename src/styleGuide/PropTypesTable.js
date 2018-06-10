import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Table } from 'components/Common'

const PropTypesTable = ({ componentPropTypes }) => {
  return Object.keys(componentPropTypes).length > 0
    ? Object.keys(componentPropTypes).map(
        rootKey =>
          Object.keys(componentPropTypes[rootKey]).length > 0 ? (
            <Fragment key={rootKey}>
              <h3>{rootKey} Prop Types</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Required</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(componentPropTypes[rootKey]).map(key => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{componentPropTypes[rootKey][key].type ? componentPropTypes[rootKey][key].type.name : ''}</td>
                      <td>{componentPropTypes[rootKey][key].required.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Fragment>
          ) : null
      )
    : null
}

PropTypesTable.propTypes = {
  componentPropTypes: PropTypes.object.isRequired
}

export default PropTypesTable
