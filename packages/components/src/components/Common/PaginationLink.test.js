import React from 'react'
import ReactDOM from 'react-dom'
import PaginationLink from './PaginationLink'
import GlobalContainer from '../Global/GlobalContainer'

it('PaginationLink - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <PaginationLink />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
