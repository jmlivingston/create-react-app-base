import React, { Fragment } from 'react'

import GlobalImporter from '../Global/GlobalImporter'

const TermsConditions = () => {
  return (
    <GlobalImporter
      stringNames={['termsConditions']}
      render={({ strings }) => <Fragment>{strings.terms}</Fragment>}
    />
  )
}

export default TermsConditions
