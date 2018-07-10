import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import GlobalContainer from '../Global/GlobalContainer'

it('Navbar - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Navbar />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
