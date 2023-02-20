const formErrorHandler = {
  methods: {
    handleError (field, attributeName) {
      if (field.$errors.length === 0) { return undefined }
      const fieldsWithErrors = field.$errors.map(error => error.$property)
      if (!fieldsWithErrors.includes(attributeName)) { return undefined }

      const message = field.$errors[0].$message
      if (message === 'Value must be numeric') return 'Valor deve ser numérico'
      if (message === 'Value must be email') return 'Valor deve ser um email válido'
      if (message === 'Value is required') return 'Não pode ficar em branco'
      if (message === 'Date must be valid') return 'Data precisa ser válida'
      if (field.$errors[0].$validator === 'maxLength') {
        const maxCharsNumber = field.$errors[0].$params.max
        return `Número máximo de carcateres: ${maxCharsNumber}`
      }
    },

    handleResponseError (error) {
      let errorMessage = null
      if (error.response.data.errors) {
        errorMessage = error.response.data.errors.join(' ')
      } else {
        errorMessage = error.response.data.message
      }
      this.$toast.error(errorMessage)
    }
  }
}

export default formErrorHandler
