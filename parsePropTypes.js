const propTypes = require('prop-types')

const mutatePropType = (name, object = propTypes[name]) => {
  object.type = { ...object.type, name }
  if (object.isRequired) {
    object.isRequired.required = true
    Object.keys(object)
      .filter(key => !['isRequired'].includes(key))
      .forEach(key => {
        object.isRequired[key] = object[key]
      })
    mutatePropType(name, object.isRequired)
  }
}

const mutatePropTypeFn = name => {
  const original = propTypes[name]
  propTypes[name] = arg => {
    const object = original(arg)
    if (typeof arg === 'function' && arg.name.indexOf('checkType') >= 0) {
      object.type = { value: parsePropTypeMethod(arg).type }
    } else if (typeof arg === 'function') {
      object.type = { value: arg.name }
    } else if (Array.isArray(arg) && typeof arg[0] === 'function') {
      object.type = {
        value: arg.map(method => parsePropTypeMethod(method).type)
      }
    } else if (!Array.isArray(arg) && typeof arg === 'object') {
      object.type = { value: parsePropTypes({ propTypes: arg }) }
    } else {
      object.type = { value: arg }
    }
    mutatePropType(name, object)
    return object
  }
}

Object.keys(propTypes)
  .filter(type => !['exact', 'checkPropTypes', 'PropTypes'].includes(type))
  .forEach(type => {
    if (propTypes[type].isRequired) {
      return mutatePropType(type)
    }
    return mutatePropTypeFn(type)
  })

const parsePropTypeMethod = ({ isRequired, ...method }, value) => ({
  type: {
    name: 'custom'
  },
  required: false,
  ...(typeof value !== 'undefined' ? { defaultValue: { value } } : {}),
  ...method
})

const parsePropTypes = ({ propTypes = {}, defaultProps = {} }) =>
  Object.keys(propTypes).reduce(
    (parsed, prop) => ({
      ...parsed,
      // [prop]: parsePropTypeMethod(propTypes[prop], defaultProps[prop])
    }),
    {}
  )

export default parsePropTypes
