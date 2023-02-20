<template>
  <form-session class="text-area-field">
    <label data-test="text-area-field-label">{{ label }}</label>

    <textarea
      class="form-control"
      @input="(event) => this.$emit('input', event.target.value)"
      :value="value"
      :class="hasError(errorMessage)"
      :data-test="dataTest"
      :disabled="disabled"
    />

    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="text-area-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/form/FormSession.vue'

export default {
  components: { FormSession },
  props: {
    label: {
      require: true,
      type: String
    },

    value: {
      type: String,
      default: ''
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    dataTest: {
      type: String,
      default: 'text-area-field'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hasError (errorMessage) {
      if (errorMessage === undefined) return ''

      return 'is-invalid'
    }
  }
}
</script>
