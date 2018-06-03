import PropTypes from 'prop-types'
import React from 'react'

import { GlobalContainer } from 'components/Global/GlobalContainer'
import ThemeImporter from 'components/Global/ThemeImporter'
import ThemeSelector from 'components/Global/ThemeSelector'

const ComponentWrapper = props => {
  return (
    <GlobalContainer>
      <ThemeImporter>
        <div className="float-right">
          <ThemeSelector />
        </div>
        <div className="clearfix" />
        {props.children}
      </ThemeImporter>
    </GlobalContainer>
  )
}

ComponentWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

// HACK: Until we can style styleguidist properly, this make the sections more readable. Basically changes subsection AlertContent to Content in left nav.
// Need to seriously think about just adding a custom style guide instead of storybook or styleguidist. There are just too many limitations or it is difficult to customized.
// Consider moving this to Yarn Workspaces / Lerna

setTimeout(() => {
  Array.from(Array.from(document.querySelectorAll("[class^='rsg--list-']"))[0].children).forEach(e => {
    const title = e.children[0].innerText
    Array.from(e.children[1].children).forEach(child => {
      child.children[0].innerText = child.innerText
        .replace(title, '')
        .replace(/([A-Z]+)/g, ' $1')
        .replace(/([A-Z][a-z])/g, ' $1')
    })
  })
})

export default ComponentWrapper
