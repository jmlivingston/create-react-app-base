import React from 'react'
import ReactDOM from 'react-dom'
import Col from './Col'
import GlobalContainer from '../Global/GlobalContainer'

it('Col - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Col />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
