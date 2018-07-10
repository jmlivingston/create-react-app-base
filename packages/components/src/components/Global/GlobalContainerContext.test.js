import React from 'react'
import ReactDOM from 'react-dom'
import GlobalContainerContext from './GlobalContainerContext'

it('GlobalContainerContext - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GlobalContainerContext>{() => null}</GlobalContainerContext>, div)
  ReactDOM.unmountComponentAtNode(div)
})
