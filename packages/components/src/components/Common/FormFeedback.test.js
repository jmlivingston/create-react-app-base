import React from 'react'
import ReactDOM from 'react-dom'
import FormFeedback from './FormFeedback'
import GlobalContainer from '../Global/GlobalContainer'

it('FormFeedback - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <FormFeedback />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
