import React from 'react'
import ReactDOM from 'react-dom'
import InputGroupText from './InputGroupText'
import GlobalContainer from '../Global/GlobalContainer'

it('InputGroupText - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <InputGroupText />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
