import React from 'react'
import ReactDOM from 'react-dom'
import Collapse from './Collapse'
import GlobalContainer from '../Global/GlobalContainer'

it('Collapse - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Collapse />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
