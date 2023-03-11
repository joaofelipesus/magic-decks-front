import CardSelectedModal from '@/components/deck/CardSelectedModal'
import factoryBuilder from '../../factory-builder'
import flushPromises from 'flush-promises'

const mocks = {
  $toast: {
    success: jest.fn()
  }
}

const store = {
  actions: {
    addToCollection: jest.fn(() => {
      return Promise.resolve({
        data: { id: '1' }
      })
    })
  }
}

function factory ({ show }) {
  const propsData = {
    show,
    card: {
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
  }

  return factoryBuilder(CardSelectedModal, { propsData, mocks, store })
}

describe('CardSelectedModal', () => {
  it('dont renders modal show prop is false', () => {
    const wrapper = factory({ show: false })

    expect(wrapper.find('[data-test="card-selected-modal"]').exists()).toBe(false)
  })

  it('renders modal show prop is true', () => {
    const wrapper = factory({ show: true })

    expect(wrapper.find('[data-test="card-selected-modal"]').exists()).toBe(true)
  })

  it('renders card image', () => {
    const wrapper = factory({ show: true })


    const imageUrl = wrapper.find('[data-test="card-image"]').attributes('src')

    expect(imageUrl).toMatch('https://some/image/path')
  })

  it('renders card data', () => {
    const wrapper = factory({ show: true })

    expect(wrapper.find('[data-test="name-en"]').text()).toMatch('Akroma, anjel of wrath')
    expect(wrapper.find('[data-test="name-pt"]').text()).toMatch('Akroma, anjo da ira')
    expect(wrapper.find('[data-test="colors"]').text()).toMatch('w')
    expect(wrapper.find('[data-test="rarity"]').text()).toMatch('rare')
    expect(wrapper.find('[data-test="set"]').text()).toMatch('legions')
    expect(wrapper.find('[data-test="set-number"]').text()).toMatch('42')
    expect(wrapper.find('[data-test="power"]').text()).toMatch('6')
    expect(wrapper.find('[data-test="toughness"]').text()).toMatch('6')
  })

  it('emits event on click outside card modal', () => {
    const wrapper = factory({ show: true })

    wrapper.find('[data-test="card-selected-modal"]').trigger('click')

    expect(wrapper.emitted('closeSelectedCardModal')).toBeTruthy()
  })

  describe('add card to collection', () => {
    it.only('renders success toast and close modal', async () => {
      const wrapper = factory({ show: true })

      wrapper.find('[data-test="add-to-collection"]').trigger('click')

      await flushPromises()

      expect(mocks.$toast.success).toHaveBeenCalledWith('Card added to collection.')
      expect(wrapper.emitted('closeSelectedCardModal')).toBeTruthy()
    })
  })
})
