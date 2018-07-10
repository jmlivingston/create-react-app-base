import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import GlobalContainer from './GlobalContainer'

it('GlobalContainer - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Fragment />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
