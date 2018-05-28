import React, { Component, Fragment } from 'react'
import { GlobalContainer } from '../../src/components/global/GlobalContainer'
import ThemeSelector from '../../src/components/global/ThemeSelector'

const Wrapper = ({ storyFn }) => (
  <GlobalContainer>
    <ThemeSelector />
    <Fragment>{storyFn()}</Fragment>
  </GlobalContainer>
)

const config = {
  wrapper: storyFn => <Wrapper storyFn={storyFn} />
}

export default config
