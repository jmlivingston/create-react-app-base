import React from 'react'
import ReactDOM from 'react-dom'
import FormGroup from './FormGroup'
import GlobalContainer from '../Global/GlobalContainer'

it('FormGroup - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <FormGroup />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
