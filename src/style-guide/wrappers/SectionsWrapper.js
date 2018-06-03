import DefaultSections from 'react-styleguidist/lib/rsg-components/Sections/SectionsRenderer'
import Heading from 'rsg-components/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'rsg-components/Styled'

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
})

export function SectionsRenderer({ classes, children }) {
  return (
    <div>
      <div className={classes.headingSpacer}>
        <Heading level={1}>Example Components</Heading>
        <p className={classes.descriptionText}>These are the greatest components</p>
      </div>
      <DefaultSections>{children}</DefaultSections>
    </div>
  )
}

SectionsRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
}

export default Styled(styles)(SectionsRenderer)
