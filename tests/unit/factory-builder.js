import Vuex from 'vuex'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

Vue.use(Vuex)

export default function factoryBuilder (component, args = {}) {
  const storeOptions = args.store || {}

  return mount(component, {
    ...args,
    store: new Vuex.Store(storeOptions)
  })
}
