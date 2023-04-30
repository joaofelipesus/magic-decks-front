import axios from 'axios'
import api from '@/lib/api'

export default {
  searchCards (_, {name, language, method}) {
    const searchCardsApi = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      timeout: 60000
    })
    return searchCardsApi.get(`/cards/search?name=${name}&lang=${language}&method=${method}`)
  },

  addToCollection (_, card) {
    return api.post('/cards', card)
  }
}
