import React from 'react'
import ReactDOM from 'react-dom'
import ErrorContainer from './ErrorContainer'
import GlobalContainer from '../Global/GlobalContainer'

it('ErrorContainer - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ErrorContainer />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
