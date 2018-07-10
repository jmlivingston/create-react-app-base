import React from 'react'
import ReactDOM from 'react-dom'
import UncontrolledCarousel from './UncontrolledCarousel'
import GlobalContainer from '../Global/GlobalContainer'

it('UncontrolledCarousel - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <UncontrolledCarousel />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
