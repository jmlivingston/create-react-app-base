import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from './Pagination'
import GlobalContainer from '../Global/GlobalContainer'

it('Pagination - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Pagination />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
