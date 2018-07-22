// See FilterExampleContainerContext for state management using Context
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { API, data } from '@myorg/core'
import FilterExampleFilter from './FilterExampleFilter'
import FilterExampleList from './FilterExampleList'
import FilterExampleTaskList from './FilterExampleTaskList'
import FilterExampleTodoList from './FilterExampleTodoList'

const dataName = 'things'

const queries = [
  {
    label: 'Plants',
    url: () => API.THING.GET_BY_TYPE_ID(1)
  },
  {
    label: 'Animals',
    url: () => API.THING.GET_BY_TYPE_ID(2)
  },
  {
    label: 'Red',
    url: () => API.THING.GET_BY_COLOR_ID(1)
  },
  {
    label: 'Yellow',
    url: () => API.THING.GET_BY_COLOR_ID(2)
  },
  {
    label: 'Blue',
    url: () => API.THING.GET_BY_COLOR_ID(3)
  }
]

class FilterExampleContainer extends PureComponent {
  state = {
    onFilter: async (query, filterIndex) => {
      const response = await data.get(query.url())
      this.setState(prevState => ({
        ...prevState,
        [dataName]: response.data,
        filterIndex: filterIndex || this.props.filterIndex,
        thingId: response.data[0].id
      }))
    },
    onFilterExampleSelect: thingId => {
      this.setState(prevState => ({
        ...prevState,
        thingId
      }))
    },
    queries,
    filterIndex: this.props.filterIndex,
    dataName
  }

  static propTypes = {
    filterIndex: PropTypes.number
  }

  componentDidMount() {
    this.state.onFilter(queries[this.props.filterIndex])
  }

  render() {
    return (
      <Fragment>
        <FilterExampleFilter queries={queries} filterIndex={this.state.filterIndex} onFilter={this.state.onFilter} />
        <hr />
        <div className="row">
          <div className="col-sm-6 pt-2">
            <FilterExampleList thingId={this.state.thingId} onSelect={this.state.onFilterExampleSelect} items={this.state[dataName] || []} />
          </div>
          <div className="col-sm-6">
            <FilterExampleTodoList thingId={this.state.thingId} />
            <FilterExampleTaskList thingId={this.state.thingId} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FilterExampleContainer
