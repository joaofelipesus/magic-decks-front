import api from '@/lib/api'

export default {
  searchCards (_, {name, language, method}) {
    return api.get(`/cards/search?name=${name}&lang=${language}&method=${method}`)
  }
}
