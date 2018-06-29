import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Home = ({ strings }) => {
  return (
    <Fragment>
      <h1>{strings.title}</h1>
      <p>{strings.description}</p>
      <h2>Basic Features</h2>
      <ul>
        <li>Login</li>
        <li>User Settings</li>
        <li>Change Language</li>
        <li>Change Theme</li>
        <li>Localization</li>
        <li>Todo (Error handled when not Authenticated)</li>
        <li>Site Map</li>
        <li>Style Guide - UX/UI and component code examples</li>
        <li>Terms Conditions (Popup from footer)</li>
      </ul>
      <h2>Logins:</h2>
      <ul>
        <li>admin@test.com / test</li>
        <li>adminja@test.com / test</li>
        <li>editor@test.com / test</li>
        <li>restricted@test.com / test</li>
        <li>readonly@test.com / test</li>
        <li>noavatar@test.com / test</li>
      </ul>
    </Fragment>
  )
}

Home.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Home
