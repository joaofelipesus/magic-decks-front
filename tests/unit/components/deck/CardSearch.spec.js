import CardSearch from '@/components/deck/CardSearch'
import factoryBuilder from '../../factory-builder'
import flushPromises from 'flush-promises'


describe('CardSearch', () => {
  it('render search fields', () => {
    const wrapper = factoryBuilder(CardSearch)

    expect(wrapper.find('[data-test="card-name"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="card-language"]').exists()).toBe(true)
  })

  it('searchs card on collection by name and language', async () => {
    const store = {
      actions: {
        searchCards: jest.fn(() => {
          return Promise.resolve({
            data: [
              {
                name_en: 'Akroma, anjel of wrath',
                name_pt: 'Akroma, anjo da ira',
                colors: ['w'],
                rarity: 'rare',
                set: 'legions',
                set_number: 42,
                power: 6,
                toughness: 6,
                image_url: 'https://some/image/path'
              }
            ]
          })
        })
      }
    }

    const wrapper = factoryBuilder(CardSearch, { store })

    wrapper.find('[data-test="card-name"]').setValue('Akroma')
    wrapper.setData({ cardLanguage: 'pt' })
    wrapper.find('[data-test="search-on-collection"]').trigger('click')

    await flushPromises()

    expect(store.actions.searchCards).toHaveBeenCalledWith(expect.anything(), {
      name: 'Akroma',
      language: 'pt',
      method: 'db'
    })
  })
})
