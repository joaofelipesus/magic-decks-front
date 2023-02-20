<template>
  <form-session class="input-field">
    <label data-test="input-field-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      @input="(event) => this.$emit('input', event.target.value)"
      :value="value"
      :class="hasError(errorMessage)"
      :disabled="disabled"
      :data-test="dataTest"
      :step="step"
    />
    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="input-field-error-message"
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
      required: true,
      type: String
    },

    value: {
      type: [String, Number],
      default: ''
    },

    errorMessage: {
      type: String,
      default: undefined
    },

    type: {
      type: String,
      default: 'text'
    },

    step: {
      type: String,
      default: undefined
    },

    disabled: {
      type: Boolean,
      default: false
    },

    dataTest: {
      type: String,
      default: 'input-field-input'
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
