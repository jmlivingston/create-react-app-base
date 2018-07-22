// See FilterExampleContainerDefault for out of the box state management
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { API, data } from '@myorg/core'
import FilterExampleFilter from './FilterExampleFilter'
import FilterExampleList from './FilterExampleList'
import FilterExampleTaskList from './FilterExampleTaskList'
import FilterExampleTodoList from './FilterExampleTodoList'

const FilterExampleContext = React.createContext()

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
      <FilterExampleContext.Provider value={{ ...this.state }}>
        <FilterExampleContext.Consumer>
          {context => (
            <Fragment>
              <FilterExampleFilter queries={queries} filterIndex={context.filterIndex} onFilter={context.onFilter} />
              <hr />
              <div className="row">
                <div className="col-sm-6 pt-2">
                  <FilterExampleList thingId={context.thingId} onSelect={context.onFilterExampleSelect} items={context[dataName] || []} />
                </div>
                <div className="col-sm-6">
                  <FilterExampleTodoList thingId={context.thingId} />
                  <FilterExampleTaskList thingId={context.thingId} />
                </div>
              </div>
            </Fragment>
          )}
        </FilterExampleContext.Consumer>
      </FilterExampleContext.Provider>
    )
  }
}

export default FilterExampleContainer
