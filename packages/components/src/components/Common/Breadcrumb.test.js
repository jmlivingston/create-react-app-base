import React from 'react'
import ReactDOM from 'react-dom'
import Breadcrumb from './Breadcrumb'
import GlobalContainer from '../Global/GlobalContainer'

it('Breadcrumb - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Breadcrumb />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
