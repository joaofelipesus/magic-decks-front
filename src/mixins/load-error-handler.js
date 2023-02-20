const formErrorHandler = {
  methods: {
    handleLoadError () {
      this.$toast.error('Houve algo de errado, por favor tente novamente mais tarde.')
    }
  }
}

export default formErrorHandler
