import React from 'react'
import ReactDOM from 'react-dom'
import Label from './Label'
import GlobalContainer from '../Global/GlobalContainer'

it('Label - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Label />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
