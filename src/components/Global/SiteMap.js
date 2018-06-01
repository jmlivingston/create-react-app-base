import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const SiteMap = ({ strings }) => {
  return (
    <Fragment>
      <h1>{strings.siteMap.displayName}</h1>
      <ul>
        {Object.keys(strings).map(key => (
          <li key={key}>
            <a href={strings[key].path}>{strings[key].displayName}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

SiteMap.propTypes = {
  strings: PropTypes.object.isRequired
}

export default SiteMap
