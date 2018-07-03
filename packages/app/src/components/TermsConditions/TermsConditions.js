import React, { Fragment } from 'react'

import { GlobalImporter } from '@myorg/components'

const TermsConditions = () => {
  return (
    <GlobalImporter
      appName="app"
      stringNames={['termsConditions']}
      render={({ strings }) => <Fragment>{strings.terms}</Fragment>}
    />
  )
}

export default TermsConditions
