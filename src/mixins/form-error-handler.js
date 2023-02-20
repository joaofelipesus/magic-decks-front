const formErrorHandler = {
  methods: {
    handleResponseError (error) {
      let errorMessage = null
      if (error.response.data.errors) {
        const errors = error.response.data.errors
        errorMessage = Object.keys(errors).map(key => {
          return `${key} ${errors[key]}`
        }).join('\n')

      } else {
        errorMessage = error.response.data.message
      }
      this.$toast.error(errorMessage)
    }
  }
}

export default formErrorHandler
