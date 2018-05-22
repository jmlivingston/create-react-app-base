import React, { Component, Fragment } from 'react'
import { ThemeContainer } from '../../src/components/theme/ThemeContainer'
import ThemeSelector from '../../src/components/theme/ThemeSelector'

const Wrapper = ({ storyFn }) => (
  <ThemeContainer>
    <ThemeSelector />
    <Fragment>{storyFn()}</Fragment>
  </ThemeContainer>
)

const config = {
  wrapper: storyFn => <Wrapper storyFn={storyFn} />
}

export default config
