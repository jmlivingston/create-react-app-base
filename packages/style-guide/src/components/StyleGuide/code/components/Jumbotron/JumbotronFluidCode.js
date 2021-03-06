const JumbotronFluidCode = `import React from 'react'

import { Jumbotron, Container } from '@myorg/components'

const JumbotronFluid = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>
    </Jumbotron>
  )
}

export default JumbotronFluid
`

export default JumbotronFluidCode
