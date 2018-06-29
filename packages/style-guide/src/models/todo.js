import PropTypes from 'prop-types'

const todo = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  isComplete: PropTypes.bool,
  created: PropTypes.string,
  createdById: PropTypes.number,
  modified: PropTypes.string,
  modifiedById: PropTypes.number
})

export default todo
