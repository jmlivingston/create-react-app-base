import React from 'react'
import ReactDOM from 'react-dom'
import BreadcrumbItem from './BreadcrumbItem'
import GlobalContainer from '../Global/GlobalContainer'

it('BreadcrumbItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <BreadcrumbItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
