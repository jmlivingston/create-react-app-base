import React from 'react'
import ReactDOM from 'react-dom'
import Loader from './Loader'
import GlobalContainer from '../Global/GlobalContainer'

it('Loader - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Loader message="" name="" />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
