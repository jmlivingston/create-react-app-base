import React from 'react'
import ReactDOM from 'react-dom'
import DateTime from './DateTime'
import GlobalContainer from '../Global/GlobalContainer'

it('DateTime - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <DateTime />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
