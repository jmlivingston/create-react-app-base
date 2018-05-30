import React, { Component, Fragment } from 'react'
import { GlobalContainer } from 'components/Global/GlobalContainer'
import ThemeSelector from 'components/Global/ThemeSelector'

const Wrapper = ({ storyFn }) => (
  <GlobalContainer>
    <div className="float-right">
      <ThemeSelector />
    </div>
    <div className="clearfix" />
    <Fragment>{storyFn()}</Fragment>
  </GlobalContainer>
)

const config = {
  wrapper: storyFn => <Wrapper storyFn={storyFn} />
}

export default config
