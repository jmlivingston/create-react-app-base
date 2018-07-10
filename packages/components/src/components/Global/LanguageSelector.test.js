import React from 'react'
import ReactDOM from 'react-dom'
import LanguageSelector from './LanguageSelector'
import GlobalContainer from './GlobalContainer'

it('LanguageSelector - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <LanguageSelector />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
