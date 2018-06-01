import React from 'react'

import GlobalImporter from 'components/Global/GlobalImporter'

const TermsConditions = () => {
  return <GlobalImporter stringName="termsConditions" render={({ strings, user }) => <div>{strings.terms}</div>} />
}

export default TermsConditions
