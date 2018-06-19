import React from 'react'

import { Media } from 'components/Common'

const MediaNested = () => {
  return (
    <Media>
      <Media left href="/">
        <Media object src="//via.placeholder.com/150x150" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>Media heading</Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        <Media>
          <Media left href="/">
            <Media object src="//via.placeholder.com/150x150" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>Nested media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    </Media>
  )
}

export default MediaNested
