import React from 'react'
import ReactDOM from 'react-dom'
import FormText from './FormText'
import GlobalContainer from '../Global/GlobalContainer'

it('FormText - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <FormText />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
