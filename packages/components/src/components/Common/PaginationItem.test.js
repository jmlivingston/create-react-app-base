import React from 'react'
import ReactDOM from 'react-dom'
import PaginationItem from './PaginationItem'
import GlobalContainer from '../Global/GlobalContainer'

it('PaginationItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <PaginationItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
