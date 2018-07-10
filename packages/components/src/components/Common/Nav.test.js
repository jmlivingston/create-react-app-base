import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import GlobalContainer from '../Global/GlobalContainer'

it('Nav - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Nav />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
