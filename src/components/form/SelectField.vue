<template>
  <form-session>
    <label v-if="!!label" data-test="select-field-label">{{ label }}</label>

    <select
      class="form-select"
      @change="(event) => this.$emit('change', event.target.value)"
      @input="(event) => this.$emit('input', event.target.value)"
      :value="value"
      :class="hasError(errorMessage)"
      :data-test="dataTest"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.value === value ? 'selected' : false"
      >
        {{ option.label }}
      </option>
    </select>

    <span
      v-if="errorMessage != undefined"
      class="text-danger"
      data-test="select-field-error-message"
    >
      {{ errorMessage }}
    </span>
  </form-session>
</template>

<script>
import FormSession from '@/components/form/FormSession.vue'

export default {
  components: {
    FormSession
  },

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
      default: 'select-field'
    },

    options: {
      type: Array,
      required: true
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
