import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import GlobalContainer from '../Global/GlobalContainer'

it('Form - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Form />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
