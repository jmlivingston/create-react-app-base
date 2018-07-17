import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { API, data } from '@myorg/core'
import ThingFilter from './ThingFilter'
import ThingList from './ThingList'
import ThingTaskList from './ThingTaskList'
import ThingTodoList from './ThingTodoList'

const ThingContext = React.createContext()

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

class ThingContainer extends PureComponent {
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
    onThingSelect: thingId => {
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
      <ThingContext.Provider value={{ ...this.state }}>
        <ThingContext.Consumer>
          {context => (
            <Fragment>
              <ThingFilter queries={queries} filterIndex={context.filterIndex} onFilter={context.onFilter} />
              <hr />
              <div className="row">
                <div className="col-sm-6 pt-2">
                  <ThingList thingId={context.thingId} onSelect={context.onThingSelect} items={context[dataName] || []} />
                </div>
                <div className="col-sm-6">
                  <ThingTodoList thingId={context.thingId} />
                  <ThingTaskList thingId={context.thingId} />
                </div>
              </div>
            </Fragment>
          )}
        </ThingContext.Consumer>
      </ThingContext.Provider>
    )
  }
}

export default ThingContainer
