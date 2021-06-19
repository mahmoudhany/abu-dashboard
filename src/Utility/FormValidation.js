
export const FormValidation = ({ fields }) => {
  const updatedFields = fields.map((fld) => {
    if (fld.isRequired) {
      if (fld.value === '') return { ...fld, error: fld.errorMsg }
      return { ...fld, error: null }
    }
    return { ...fld, error: null }
  })
  return {
    updatedFields,
    isValid: updatedFields.filter(({ error }) => error !== null).length === 0
  }
}
