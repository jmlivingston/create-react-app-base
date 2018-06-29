const validate = (obj, validationRules) =>
  Object.keys(validationRules).reduce(
    (acc, key) => {
      const keyValid = validationRules[key](obj[key])
      return {
        ...acc,
        form: keyValid ? acc.form : keyValid,
        [key]: !keyValid
      }
    },
    { form: true }
  )

export { validate }
