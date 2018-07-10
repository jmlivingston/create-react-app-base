import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import ThemeImporter from './ThemeImporter'

it('ThemeImporter - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ThemeImporter user={{}}>
      <Fragment />
    </ThemeImporter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
