import React from 'react'
import ReactDOM from 'react-dom'
import Code from './Code'
import GlobalContainer from '../Global/GlobalContainer'

it('Code - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Code />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
