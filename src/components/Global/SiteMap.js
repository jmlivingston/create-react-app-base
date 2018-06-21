import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const SiteMap = ({ strings }) => {
  return (
    <Fragment>
      <h1>{strings.siteMap.displayName}</h1>
      <ul>
        {Object.keys(strings).map(key => (
          <li key={key}>
            <Link to={strings[key].path}>{strings[key].displayName}</Link>
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
