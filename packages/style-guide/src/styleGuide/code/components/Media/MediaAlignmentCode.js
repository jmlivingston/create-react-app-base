const MediaAlignmentCode = `import React, { Fragment } from 'react'

import { Media } from 'components/Common'

const MediaAlignment = () => {
  return (
    <Fragment>
      <Media>
        <Media left top href="/">
          <Media object src="//via.placeholder.com/150x150" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>Top aligned media</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
          odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="/">
          <Media object src="//via.placeholder.com/150x150" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>Middle aligned media</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
          odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="/">
          <Media object src="//via.placeholder.com/150x150" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>Bottom aligned media</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
          odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </Fragment>
  )
}

export default MediaAlignment
`

export default MediaAlignmentCode
