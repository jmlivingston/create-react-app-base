import React from 'react'

import GlobalImporter from 'components/Global/GlobalImporter'

const TermsConditions = () => {
  return <GlobalImporter stringNames={['termsConditions']} render={({ strings, user }) => <div>{strings.terms}</div>} />
}

export default TermsConditions
