import React from 'react'
import ReactDOM from 'react-dom'
import Row from './Row'
import GlobalContainer from '../Global/GlobalContainer'

it('Row - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Row />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
