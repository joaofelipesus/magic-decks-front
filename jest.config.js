module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/lib/api.js',
    '!src/router/index.js',
    '!src/App.vue',
    '!src/store/**/state.js',
    '!src/store/index.js',
    '!src/mixins/form-error-handler.js',
    '!src/mixins/load-error-handler.js',
    '!src/store/**/index.js',
    '!src/components/HomeNavbar.vue',
    '!src/components/form/FormSession.vue'
  ]
}
