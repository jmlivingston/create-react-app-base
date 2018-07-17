import React, { Fragment } from 'react'

import { Button } from '@myorg/components'

const ThingList = ({ thingId, items, onSelect }) => {
  return items
    ? items.map((item, index) => (
        <Fragment key={item.name}>
          <Button
            className="mb-2 text-capitalize"
            color={item.id === thingId ? 'white' : 'secondary'}
            onClick={() => onSelect(item.id)}>
            {item.name}
          </Button>
          <br />
        </Fragment>
      ))
    : null
}

export default ThingList
