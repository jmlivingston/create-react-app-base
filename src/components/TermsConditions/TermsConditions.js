import React, { Fragment } from 'react'

import GlobalImporter from 'components/Global/GlobalImporter'

const TermsConditions = () => {
  return (
    <GlobalImporter
      stringNames={['termsConditions']}
      render={({ strings, user }) => <Fragment>{strings.terms}</Fragment>}
    />
  )
}

export default TermsConditions
