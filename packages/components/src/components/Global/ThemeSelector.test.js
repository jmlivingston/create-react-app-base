import React from 'react'
import ReactDOM from 'react-dom'
import ThemeSelector from './ThemeSelector'
import GlobalContainer from './GlobalContainer'

it('ThemeSelector - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ThemeSelector />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
