import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Card, CardBody, CardHeader, Collapse, Table } from '@myorg/components'

class PropTypesTable extends PureComponent {
  state = {
    collapse: false
  }

  columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Type',
      accessor: 'type'
    },
    {
      Header: 'Required',
      accessor: 'required'
    }
  ]

  toggle() {
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }))
  }

  render() {
    return Object.keys(this.props.componentPropTypes).length > 0
      ? Object.keys(this.props.componentPropTypes).map(
          rootKey =>
            Object.keys(this.props.componentPropTypes[rootKey]).length > 0 ? (
              <Card key={rootKey}>
                <CardHeader onClick={() => this.toggle()} className="cursor-pointer">
                  {rootKey}
                </CardHeader>
                <Collapse isOpen={this.state.collapse} timeout={0}>
                  <CardBody>
                    <Table
                      columns={this.columns}
                      data={Object.keys(this.props.componentPropTypes[rootKey]).map(key => ({
                        name: key,
                        type: this.props.componentPropTypes[rootKey][key].type
                          ? this.props.componentPropTypes[rootKey][key].type.name
                          : '',
                        required: this.props.componentPropTypes[rootKey][key].required.toString()
                      }))}
                      showPagination={false}
                      minRows={0}
                    />
                  </CardBody>
                </Collapse>
              </Card>
            ) : null
        )
      : null
  }
}

PropTypesTable.propTypes = {
  componentPropTypes: PropTypes.object.isRequired
}

export default PropTypesTable
