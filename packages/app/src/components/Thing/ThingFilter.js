import React from 'react'

import { Button } from '@myorg/components'

const ThingFilter = ({ filterIndex, queries, onFilter }) => {
  return queries
    ? queries.map((query, index) => (
        <Button
          key={query.label}
          color={index === filterIndex ? 'info' : 'primary'}
          onClick={() => onFilter(query, index)}>
          {query.label}
        </Button>
      ))
    : null
}

export default ThingFilter
